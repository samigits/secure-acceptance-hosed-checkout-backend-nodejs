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
2. Once you log in go to "Payment Configuration" => "Secure Acceptance Settings"
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/555f38ba-a9b5-48b2-963b-6f50305ab00b)
3. Click on the "New Profile" button at the right top corner.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/6bf976ec-28b0-44b7-8f1b-95716de98c17)
4. Give a name for your profile. You can skip the contact information. Don't enable any of the added-value services unless you have some confirmation from CyberSource to use those features
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/3cc5c0ee-27e8-4696-bff8-1c9759dc2489)

The author uses a checkout GitHub repository as a reference

