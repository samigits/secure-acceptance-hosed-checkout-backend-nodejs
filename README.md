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
4. Give a name for your profile, fill in your company name, and set the integration method as "Hosted Checkout". You can skip the contact information. Don't enable any of the added-value services unless you are purposefully looking for those features.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/07e42df9-135b-4f27-9ef5-0d507e8279a0)

5. After you submit, it will take you to the page where you can edit the profile. At this step go to the "Payment Settings" tab and click on "Add card type".
       ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/23af27e5-f99f-41a8-991c-92ac49e8ab12)
6. Select the card types you are looking for and submit the form.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/f68605bc-2bf1-4296-bc5e-07b663fa7175)
7. Click on the setting icon for each enabled card type.
       ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/9e732472-b6ea-4248-8742-3da97e6ee9ad)
8. On the setting page, enable CVN display and CVN required, Select the currencies that you are looking for. It is recommended to disable the payer authentication if you are in the public test environment. 
       ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/9ff309e9-b33f-43be-9e54-d14124ed8d4e)
       ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/2f4b608b-8140-4ec7-9c31-23787970316d)
9. Once you have done Step 8 for each activated card type, click save at the bottom right corner.
10. Step forward to the Security tab and click the "Create Key" button.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/c23a61de-0dea-492f-aca7-224f186c7067)


The author uses a checkout GitHub repository as a reference

