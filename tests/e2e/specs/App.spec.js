/* global context, it, beforeEach, cy */

context('Todo-list', () => {
  beforeEach(() => {
    cy.visit('localhost:8080');
  });

  it('removes the default element', () => {
    cy.get('.tasks-container div').click()
      .get('.tasks-container div').should('not.exist');
  });
});
