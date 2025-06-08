beforeEach(() => {
    const userName = Cypress.env("USERNAME");
    const password = Cypress.env("PASSWORD");

    cy.visit('/');
    cy.login(userName, password);
})

it('Home Page renders properly', () => {
    cy.get('.cms-toolbar-item-logo')
    .should('have.text','django CMS');

    //Static content verification
    cy.get('.cms-welcome-heading')
    .invoke('text')
    .should((text) => {
        const trimmedText = String(text).trim();
        expect(trimmedText).to.equal('Welcome to your new django CMS installation!');
    });
});

it('Home Page interactions work', () => {
    //Test top-left drop-down menu.
    cy.contains('example.com')
        .should('exist');

    cy.contains('example.com')
        .click();

    cy.contains('Pages...')
        .should('exist');

    cy.contains('Users...')
        .should('exist');

    cy.contains('Administration...')
        .should('exist');

    cy.contains('Aliases...')
        .should('exist');

    cy.contains('User settings...')
        .should('exist');

    cy.contains('Disable toolbar')
        .should('exist');

    cy.contains('Shortcuts...')
        .should('exist');

    cy.contains('Logout daguilar')
        .should('exist');
    
    cy.contains('example.com')
        .click();

    //Test Background Color
    cy.get('[data-rel=color-toggle]')
        .click();

    cy.get('.cms-welcome-bg')
      .should('have.css', 'background-color', 'rgb(68, 68, 68)');

    cy.get('[data-rel=color-toggle]')
        .click();
});

it.only('Add page modal', () => {
    cy.get('.cms-btn-action')
        .click();
});