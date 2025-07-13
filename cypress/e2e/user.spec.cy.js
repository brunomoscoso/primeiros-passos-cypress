import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {
  it.only('User Info Update- Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails('FirstName', 'MiddleName', 'LastName');
    myInfoPage.fillEmployeeDetails('12345', '67890', 'DL123456', '2028-10-01');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

  it('Login - Fail', () => {
    cy.visit('/auth/login');

    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.wrongCredentialAlert);
  });
  
});