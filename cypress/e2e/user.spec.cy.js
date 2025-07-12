import userData from '../fixtures/users/userData.json';

describe('Orange HRM Tests', () => {

  const selectorsLsit = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField:".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  };


  it.only('User Info Update- Success', () => {
    cy.visit('/auth/login');

    cy.get(selectorsLsit.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsLsit.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsLsit.loginButton).click();
    cy.get(selectorsLsit.dashboardGrid);
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get(selectorsLsit.dashboardGrid);
    cy.get(selectorsLsit.myInfoButton).click();
    cy.get(selectorsLsit.firstNameField).clear({ force: true }).type('FirstNameTest');
    cy.get(selectorsLsit.middleNameField).clear().type('MiddleNameTest'); 
    cy.get(selectorsLsit.lastNameField).clear().type('LastNameTest');
    cy.get(selectorsLsit.genericField).eq(3).clear().type('EmIdTest');
    cy.get(selectorsLsit.genericField).eq(4).clear().type('OtherIdTest');
    cy.get(selectorsLsit.genericField).eq(5).clear().type('DriverLicenseNumberTest');
    cy.get(selectorsLsit.dateField).eq(0).clear().type('2025-10-01');
    cy.get(selectorsLsit.dateCloseButton).click();
    cy.get(selectorsLsit.submitButton).eq(0).click();
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close');
  });

  it('Login - Fail', () => {
    cy.visit('/auth/login');

    cy.get(selectorsLsit.usernameField).type(userData.userFail.username);
    cy.get(selectorsLsit.passwordField).type(userData.userFail.password);
    cy.get(selectorsLsit.loginButton).click();
    cy.get(selectorsLsit.wrongCredentialAlert);
  });
  
});