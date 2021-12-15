const Page = require('./Page');

class SigninPage extends Page {
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get containerMessage() {
        return $('#root');
    }

    async signup (email, password) {
        await this.open();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('/signup');
    }
}

module.exports = new SigninPage();