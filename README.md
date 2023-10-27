# CyberSource Hosted Checkout API Node.js Example Coded by Samuel Bahiru
> An example of how to integrate CyberSource's Hosted Checkout API (formerly known as Silent Order POST) into a Node.js web application.

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
11. Give a name for the key and then click on the 'Create' button. 
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/f31b7f6b-33dc-41c0-a5a7-3841e395c9b7)
12. Proceed to the Payment form tab and enable billing information, then configure accordingly. In the order review, make sure you check the display box for billing information and finally click the 'Save' button at the right bottom corner.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/6122d91d-4211-44d6-86eb-08647f7ca6f2)
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/287ac341-499c-4a75-a9ef-1213e9e03ecb)
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/637cfc67-b522-4cb1-a700-7164e0b70bb7)
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/ae774212-3e51-41ac-8278-6ea0fdd88dfe)
13. Go to the "Customer Response" Tab, and at the bottom enter the URL of the page to link to from the Transaction Response Page after the check-out process is complete. Don't forget to click the save button at the end.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/920b7e33-4486-4da5-8ad3-dde13bc5a27b)
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/b0586569-ae83-43cf-8182-73262378e8d4)
14. Finally click the Promote Profile button at the right top corner and make sure your profile status is changed to active.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/a180e40f-61d5-40a6-9388-8101c2ff4040)
15. Once you have followed the steps, the profile should be activated. Now you can take the profile ID at the left top corner, and the other two keys ( access and secret keys ) by clicking the "View Key" button under the security tab.
        ![image](https://github.com/samigits/secure-acceptance-hosed-checkout-backend-nodejs/assets/48197208/1ed9bf9c-5c5f-4e9d-9fcf-4f1264c1b00a)

for more you can find the documentation [here](https://developer.cybersource.com/content/cybsdeveloper2021/amer/en/library/documentation/dev_guides/Secure_Acceptance_Hosted_Checkout/Secure_Acceptance_Hosted_Checkout.pdf)
