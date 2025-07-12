describe('Orange HRM Tests', () => {

  const selectorsLsit = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']"
  };

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get(selectorsLsit.usernameField).type('Admin');
    cy.get(selectorsLsit.passwordField).type('admin123');
    cy.get(selectorsLsit.loginButton).click();

    // Espera o Dashboard carregar (esperando um elemento confiável do dashboard)
    cy.get(selectorsLsit.sectionTitleTopBar, { timeout: 10000 }).should('contain', 'Dashboard');

    // Verifica se o pathname está correto
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  });

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get(selectorsLsit.usernameField).type('Test');
    cy.get(selectorsLsit.passwordField).type('Test');
    cy.get(selectorsLsit.loginButton).click();
    cy.get(selectorsLsit.wrongCredentialAlert);
  });
  
});