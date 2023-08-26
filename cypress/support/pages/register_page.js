/// <reference types="cypress" />

const user_data = require('../../fixtures/cadastro_usuario.json')

//Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    inputs: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        successTitle: '.swal2-popup',
        erroNameVazio: '#errorMessageFirstName',
        erroEmailVazio: '#errorMessageFirstName',
        erroPasswordVazio: '#errorMessageFirstName'
    }
}

//Ações/Funções/Métodos

export default {
    submitRegister() {
        cy.get(elements.buttons.register).click()
    },

    fillName() {
        cy.get(elements.inputs.name).type(user_data.name)
        cy.get(elements.buttons.register).click()
    },

    fillEmail() {
        cy.get(elements.inputs.email).type(user_data.email)
        cy.get(elements.buttons.register).click()
    },

    fillPassword() {
        cy.get(elements.inputs.password).type(user_data.password)
    },

    checkMessageNameVazio() {
        cy.get(elements.messages.erroNameVazio).should('be.visible')
            .should('contain', 'O campo nome deve ser prenchido')
    },

    checkMessageEmailVazio() {
        cy.get(elements.messages.erroEmailVazio).should('be.visible')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    },

    checkMessagePasswordVazio() {
        cy.get(elements.messages.erroPasswordVazio).should('be.visible')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    },

    checkMessageSuccess() {
        cy.get(elements.messages.successTitle)
            .should('contain', 'Cadastro realizado!')
            .should('contain', 'Bem-vindo Alexandre Nunes')
    }
}