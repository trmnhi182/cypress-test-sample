

describe('An example test', ()=>{
    it('should visit', () =>{
        cy.visit('http://demo.guru99.com/test/newtours/');
        cy.wait(3000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('tutorial');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('tutorial');
        cy.get("input[name='submit']").click();
        cy.wait(3000);
        cy.get("h3").should('be.visible').and('have.text', 'Login Successfully');
        
        //cy.visit('https://demo.guru99.com/test/newtours/reservation.php')
        cy.get('a').contains('Flights').click();
        //cy.get("input[font:nth-child(1) > input:nth-child(2)]");
        cy.get("select[name='fromPort']").select('Sydney');
        cy.get("select[name='fromMonth']").select("February");
        cy.get("select[name='fromDay']").select("18");
        cy.get("select[name='toPort']").select("Paris");
        cy.get("select[name='toMonth']").select("April");
        cy.get("select[name='toDay']").select("6");
        cy.get("input[name='findFlights']").click();
        cy.get("font:nth-child(1) > b > font:nth-child(1)").contains("After flight finder - No Seats Avaialble")
    })

    //Negative test case: wrong username 
    it('Should display invalid input', ()=>{
        cy.visit('http://demo.guru99.com/test/newtours/');
        cy.wait(3000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type('tutorial12');
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type('tutorial');
        cy.get("input[name='submit']").click();
        cy.wait(3000);
        cy.get("span").should('be.visible').and('have.text', 'Enter your userName and password correct\n');
    })

})