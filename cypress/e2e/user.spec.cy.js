import userData from '../fixtures/users/userData.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance');


const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {
  it('User Info Update- Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last(), '1980-01-01');
    myInfoPage.fillEmployeeDetails('12345', '67890', 'DL123456', '2028-10-01');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

});