const crypto = require("crypto");

const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pick } = require("ramda");

const config = require("./config");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const UNSIGNED_FIELD_NAMES = [  ];
const SIGNED_FIELD_NAMES = [
  "access_key",
  "amount",
  "currency",
  "locale",
  "payment_method",
  "profile_id",
  "reference_number",
  "signed_date_time",
  "customer_ip_address",
  "signed_field_names",
  "transaction_type",
  "transaction_uuid",
  "unsigned_field_names"
];



app.post("/hasher",cors({ origin: config.CORS_ALLOWED_HOSTS }), (req, res) => {
  input=req.body;
  console.log(input);
  let universalID=uuid.v4();
  const allFieldsToSign = {
    access_key:config.cybersource.ACCESS_KEY,
    amount:input.amount,
    currency:input.currency,
    locale:input.locale,
    payment_method:input.payment_method,
    profile_id:config.cybersource.PROFILE_ID,
    reference_number:universalID,
    signed_date_time:convertToSignatureDate(new Date()),
    signed_field_names: input.signed_field_names.join(","),
    transaction_type:input.transaction_type,
    transaction_uuid:universalID,
    unsigned_field_names:input.unsigned_field_names
  };
  const signature = sign(allFieldsToSign);
  console.log(allFieldsToSign.customer_ip_address);
  res.json({ ...allFieldsToSign, signature });
});
app.post('/response', (req, res) => {
  if(req.body.reason_code=='100')
    res.render("order-success");
  else
    res.render('order-failure');
  //res.json(req.body);
});


app.listen(9000);

console.log("Listening at http://localhost:9000");

function convertToSignatureDate(d) {
  const [ isoDate ] = d.toISOString().split(".");

  return `${isoDate}Z`;
}

function sign(fields) {
  console.log(fields);
  const hash = crypto.createHmac("sha256", config.cybersource.SECRET_KEY);
  const encodedFields = Object.keys(fields).sort().map(k => `${k}=${fields[ k ]}`).join(",");

  return hash.update(encodedFields).digest("base64");
}

