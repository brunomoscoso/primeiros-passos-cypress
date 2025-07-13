class LoginPage {
    selectorsList() {
        const selectorsList = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectorsList;
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username);
        cy.get(this.selectorsList().passwordField).type(password);
        cy.get(this.selectorsList().loginButton).click();
    }
}

export default LoginPage;