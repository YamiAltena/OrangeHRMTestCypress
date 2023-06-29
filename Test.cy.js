describe('OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Success Login', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-brand-banner > img').should('be.visible')
    cy.get('.oxd-topbar-header-title').should('be.visible')
  })

  it('Failed Login wrong password', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('45678')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
  })

  it('Failed Login Wrong Username', () => {
    cy.get('input[name="username"]').type('Raka')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')  
  })

  it('Menu Admin', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-header-breadcrumb-module').should('contain.text','Admin')
  })



})