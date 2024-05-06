describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // Abre o site
        cy.visit('http://172.20.96.1:5000/')
    })

    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })

    it('Teste 3: Calcula Frete', () => {
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
            cy.get('input').type('30535-420')
            cy.contains('Calcular Frete').click()
            cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })

    it('Teste 4: Simula a Compra de um Livro', () => {
        // Clica no botão Comprar
        cy.contains('button', 'Comprar').click()

        // Espera que o pop-up de confirmação seja exibido
        cy.wait(2000) // Espera um tempo fixo para o pop-up aparecer

        // Verifica se o pop-up tem a mensagem de compra realizada com sucesso
        cy.get('.swal-text').should('contain', 'Sua compra foi realizada com sucesso')

        // Fecha o pop-up, clicando em seu botão
        cy.get('.swal-button').click()
    })
})
