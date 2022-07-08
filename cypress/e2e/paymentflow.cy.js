describe('Payment Flow Testing', ()=>{
    //Test case 1: 
    it('Should pay successfully', ()=>{
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");

        cy.get("select[name='quantity']").select('4');  
        cy.get("input[type='submit']").click();    
        cy.wait(5000);     

        //Assert if Pay Amount is $80.00
        cy.get('.row').contains('Pay Ammount $80.00');

        //Assert if button Pay below now has $80.00 text
        cy.get('.actions').contains('Pay $80.00');

        cy.get("input[name='card_nmuber']").type("1234567890123456"); 
        cy.get("select[name='month']").select('11');  
        cy.get("select[name='year']").select('2026');
        cy.get("input[name='cvv_code']").click();    
        cy.get("input[name='cvv_code']").type("766"); 
        cy.get("input[type='submit']").click();
        cy.get("h2").should('be.visible').and('have.text', 'Payment successfull!');
        
    });

    //Test case 2: Card number has character
    it('Should trigger warning', ()=>{
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");
        cy.wait(5000);
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type("N");
        cy.get('#message1').should('be.visible').and('have.text', 'Characters are not allowed');
    });

    //Test case 3: Not select expiration month
    it('Should trigger an dialog alert', ()=>{
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");
        cy.wait(5000);
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type("1234567890123456");
        cy.get("select[name='year']").select('2026');
        cy.get("input[name='cvv_code']").click();    
        cy.get("input[name='cvv_code']").type("766"); 
        cy.get("input[type='submit']").click();

        //reference: https://applitools.com/blog/testing-browser-alerts-confirmations-prompts-cypress/
        cy.on('window:alert', (text) => {expect(text).to.contains('Please select an item in the list.');});
    });

    //Test case 4: Card numbers have less then 16 digits
    it('Should trigger an dialog alert', ()=>{
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");
        cy.wait(5000);
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type("1234567890");
        cy.get("select[name='month']").select('11');
        cy.get("select[name='year']").select('2026');
        cy.get("input[name='cvv_code']").click();    
        cy.get("input[name='cvv_code']").type("766"); 
        cy.get("input[type='submit']").click();
        cy.on('window:alert', (text) => {expect(text).to.contains('Check card number is 16 digits!');});
    })

})