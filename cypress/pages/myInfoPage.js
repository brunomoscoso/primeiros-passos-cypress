class MyInfoPage{
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField:".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }

        return selectors;
    }

    fillPersonalDetails(firstName, middleName, lastName) {
            cy.get(this.selectorList().firstNameField).clear({ force: true }).type(firstName);
            cy.get(this.selectorList().middleNameField).clear({ force: true }).type(middleName); 
            cy.get(this.selectorList().lastNameField).clear({ force: true }).type(lastName);

    }

    fillEmployeeDetails(employID, otherID, driverLicense, data) {
            cy.get(this.selectorList().genericField).eq(3).clear().type(employID);
            cy.get(this.selectorList().genericField).eq(4).clear().type(otherID);
            cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicense);
            cy.get(this.selectorList().dateField).eq(0).clear().type(data);
            cy.get(this.selectorList().dateCloseButton).click();
    }

    saveForm(){
            cy.get(this.selectorList().submitButton).eq(0).click({ force: true });
            cy.get('body').should('contain', 'Successfully Updated');
            cy.get('.oxd-toast-close');
    }

    fillStatus(){
            cy.get(this.selectorList().genericComboBox).eq(0).click();
            cy.get(this.selectorList().secondItemComboBox).click();
            cy.get(this.selectorList().genericComboBox).eq(1).click();
            cy.get(this.selectorList().thirdItemComboBox).click();
    }
}

export default MyInfoPage;