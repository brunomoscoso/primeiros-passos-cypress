import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Tests', () => {
  it('Login - Fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password);
    loginPage.checkAccesInvalid();
  });
  
    it('Login - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
  });
});