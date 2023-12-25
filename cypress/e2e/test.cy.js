describe('empty spec', () => {
  it('passes', () => {
    // 訪問網站
    cy.visit('https://milelens.com/account/signin');
    // 做一些點擊
    // cy.get('.gLFyf').type("Cypress Test")
    // cy.get('button[jsname="ZUkOIc"]').click()
    // cy.get('.CqAVzb > center > .gNO89b').click()
    // cy.url().should('include', '/search')
    cy.get('input[name="電子郵件地址"]').type("kson01@mailnesia.com")
    cy.get('input[name="密碼"]').type("Pass1234")
    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'milelens')
  })
})