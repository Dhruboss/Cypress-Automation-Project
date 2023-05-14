describe("Signup and Order a product", ()=>{
    it("Visiting automationexercise.com,signup,order product and payment", ()=>{

        cy.visit('https://automationexercise.com/')

        cy.get('a[href="/login"]').click()

        cy.get("[name='name']").type("Showvikk")

        cy.get("input[data-qa='signup-email']").type("showvikk@gmail.com")

        cy.get("button[data-qa='signup-button']").click()

        cy.get("#id_gender1").click()

        cy.get("#password").type("123456")

        cy.get("#days").select("1")

        cy.get("#months").select("July")

        cy.get("#years").select("2000")

        cy.get("#first_name").type("Salman")

        cy.get("#last_name").type("Dhrubo")

        cy.get("#company").type("tekarsh")

        cy.get("#address1").type("Mohakhali")

        cy.get("#address2").type("Dohs")

        cy.get("#country").select("India")

        cy.get("#state").type("Dhaka")

        cy.get("#city").type("Mirpur")

        cy.get("#zipcode").type("folpotti")

        cy.get("#mobile_number").type("01547954649")

        cy.get("button[data-qa='create-account']").click()

        cy.get(".btn.btn-primary").click()

        cy.xpath("(//a[contains(text(),'Add to cart')])[3]").click()

        cy.xpath("//u[normalize-space()='View Cart']").click()

        cy.xpath("//a[@class='btn btn-default check_out']").click()

        cy.xpath("//a[@class='btn btn-default check_out']").click()

        cy.xpath("//input[@name='name_on_card']").type("salluu")

        cy.xpath("//input[@name='card_number']").type("55555")

        cy.xpath("//input[@placeholder='ex. 311']").type("311")

        cy.xpath("//input[@placeholder='MM']").type("05")

        cy.get('[data-qa="expiry-year"]').type("2022")

        cy.xpath("//button[@id='submit']").click()


    })
})