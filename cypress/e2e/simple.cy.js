describe('An example test', ()=>{
    it('should visit', () =>{
        cy.visit('http://demo.guru99.com/test/newtours/');
        cy.wait(10000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('tutorial');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('tutorial');
        cy.get("input[name='submit']").click();
        cy.wait(10000);
        cy.get("h3").should('be.visible')
            .and('have.text', 'Login Successfully');
        
        cy.visit('https://demo.guru99.com/test/newtours/reservation.php')
        //cy.get("input[linkText='Flights]").click();
        //cy.get("input[name='findFlights]").click();
        //cy.get("font:nth-child(1)").click();
        //cy.get("td:nth-child(2) p").click();
        cy.get("input[name='fromPort]").click();
        cy.get("input[name='fromPort']").select('Sydney');
        cy.get("input[name='findFlights']").click();

    })
})