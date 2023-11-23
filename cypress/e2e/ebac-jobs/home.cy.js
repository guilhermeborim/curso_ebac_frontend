/// <reference types="cypress" />
describe('Testes de funcionalidades da agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve ser capaz de adicionar um contato', () => {
    cy.get('[type="text"]').type('Guilherme')
    cy.get('[type="email"]').type('borimdev@gmail.com')
    cy.get('[type="tel"]').type('19994791173')
    cy.get('.adicionar').click()

  })

  it('Deve ser capaz de editar um contato existente', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Fernanda')
    cy.get('[type="email"]').clear().type('fernanda@gmail.com')
    cy.get('[type="tel"]').clear().type('1111111')
    cy.get('.alterar').click()
  })

  it('Deve ser capaz de remover um contato existente', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
  })
})
