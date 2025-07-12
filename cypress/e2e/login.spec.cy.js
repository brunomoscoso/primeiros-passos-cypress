describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click();

    // Espera o Dashboard carregar (esperando um elemento confiável do dashboard)
    cy.get('.oxd-topbar-header-breadcrumb', { timeout: 10000 }).should('contain', 'Dashboard');

    // Verifica se o pathname está correto
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard');
  });

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get("[name='username']").type('Test');
    cy.get("[name='password']").type('Test');
    cy.get("[type='submit']").click();
    cy.get("[role='alert']")
  });
  
});