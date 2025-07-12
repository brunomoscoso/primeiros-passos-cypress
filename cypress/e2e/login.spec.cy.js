import userData from '../fixtures/users/userData.json';

describe('Orange HRM Tests', () => {

  const selectorsLsit = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']"
  };


  it('Login - Success', () => {
    cy.visit('/auth/login');

    cy.get(selectorsLsit.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsLsit.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsLsit.loginButton).click();

    // Espera o Dashboard carregar (esperando um elemento confiável do dashboard)
    cy.get(selectorsLsit.dashboardGrid, { timeout: 10000 })
    // Verifica se o pathname está correto
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  });

  it('Login - Fail', () => {
    cy.visit('/auth/login');

    cy.get(selectorsLsit.usernameField).type(userData.userFail.username);
    cy.get(selectorsLsit.passwordField).type(userData.userFail.password);
    cy.get(selectorsLsit.loginButton).click();
    cy.get(selectorsLsit.wrongCredentialAlert);
  });
  
});