/// <reference types="cypress" />
import register_page from '../support/pages/register_page';

const screens = ['desktop', 'iphone-x']

screens.forEach(element => {

    describe('Cadastro de Usuário', () => {

        beforeEach('Visitar página de cadastro', () => {
            if (element != 'desktop') {
                cy.viewport(element)
            }
            cy.visit('/register')
        })

        it('Validar campo nome vazio', () => {
            register_page.submitRegister()
            register_page.checkMessageNameVazio()
        })

        it('Validar campo e-mail vazio', () => {
            register_page.fillName()
            register_page.submitRegister()
            register_page.checkMessageEmailVazio()
        })

        it('Validar campo senha vazio', () => {
            register_page.fillName()
            register_page.fillEmail()
            register_page.submitRegister()
            register_page.checkMessagePasswordVazio()
        })

        it('Validar cadastro com sucesso', () => {
            register_page.fillName()
            register_page.fillEmail()
            register_page.fillPassword()
            register_page.submitRegister()
            register_page.checkMessageSuccess()
        })
    })
})