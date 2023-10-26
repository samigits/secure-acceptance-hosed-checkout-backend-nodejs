# CyberSource Hosted Checkout API Node.js Example Coded by Samuel Bahiru
> An example of how to integrate CyberSource's Hosted Checkout API (formerly known as Silent Order POST) to a Node.js web application.

## Requirements

* Node.js 10+
* A CyberSource Business Center account.

## Getting started

1. Create a new _Secure Acceptance_ profile.
2. Generate a set of security keys for the profile.
4. Set the following environment variables
    ```sh
    CYBERSOURCE_CHECKOUT_API_ACCESS_KEY=
    CYBERSOURCE_ORG_ID=
    CYBERSOURCE_CHECKOUT_API_PROFILE_ID=
    CYBERSOURCE_CHECKOUT_API_SECRET_KEY=
    ```
    _Note: Check out CyberSource's documentation for a description of these variables and where to get their values._
5. `npm install` (or `yarn install`)
6. `npm start` or (`yarn start`)

### Cybersource Secure Acceptance Hosted Checkout Configuration
1. Make sure you have registered at the Cybersource business center and that you have portal access. you can register using [this](https://ebc2test.cybersource.com/ebc2/registration/external) link.
2. Once you logged in goto "Payment Configuration" => "Secure Acceptance Settings"
![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/555f38ba-a9b5-48b2-963b-6f50305ab00b)

The author uses a checkout GitHub repository as a reference

