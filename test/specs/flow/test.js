const assert = require('assert');

describe('Amazon', () => {
    it('should be a pending test')
    describe('Login functionality', () =>{
        // it('Test case 1', () => {
        //     browser.url("https://www.amazon.com/");
        //     browser.element('#nav-link-accountList').click();
        //     browser.pause(5000);
        //     const signInText = browser.element('//h1').getText();
        //     assert.equal(signInText, 'Sign in');
        // });
        // it('Test case 2', () => {
        //     browser.element('//*[@type="email"]').keys("raffi.vineti@gmail.com")
        //     // browser.pause(5000);
        //     browser.setValue('//*[@id="ap_password"]', "qatestuser");
        //     // browser.pause(5000);
        //     browser.waitForExist("#signInSubmit", 10000);
        //     browser.element('#signInSubmit').click();
        //     assert.equal(emailLabel, 'Email (phone for mobile accounts)');
        // });
        // it('Test case 2', () => {

        // });


        it('sign in Text is correct', () => {
            browser.url("/");
            browser.element("//*[@id = 'nav-link-accountList']").click();
            const signInText = browser.element('//h1').getText();
            assert.equal(signInText, 'Sign in');
        })
        it('Email lable text is correct', () =>{
            const emailLabel = browser.element("//label[@for = 'ap_email']").getText();
            browser.element("#ap_email").keys("raffi.vineti@gmail.com");
            assert.equal(emailLabel, 'Email (phone for mobile accounts)');
        })
        it('Password label text is correct', ()=> {
            browser.waitForExist('//*[@id="ap_password"]', 10000)
            browser.setValue('//*[@id="ap_password"]', "qatestuser");
            const passLabel = browser.element("//label[@for = 'ap_password']").getText();
            assert.equal(passLabel, 'Password')
        }) 
        it('Amazon Logo text is present as expected ', () =>{
            browser.waitForExist(".a-button-input", 10000);
            browser.element("//*[@class = 'a-button-input']").click();
            const amazonLogoText = browser.element('//*[@class = "nav-sprite nav-logo-base"]').getText();
            console.log(amazonLogoText);
            assert.equal(amazonLogoText, 'Amazon')
        })
    })
})