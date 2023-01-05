/* eslint class-methods-use-this: off, cypress/no-force: off */

class Utility {
    elementIsVisible(element) {
      return cy.get(element, { timeout: 10000 }).should('be.visible')
    }
  
    getElement(element) {
      return cy.get(element, { timeout: 10000 })
    }
  
    findElementAndClick(element) {
      cy.get(element).click()
    }
  
    verifyTextinurl(urlText) {
      cy.url().should('contains', urlText)
    }
  
    findElementByText(textvalue) {
      cy.contains(textvalue)
    }

    checkElementIsVisible(element) {
      cy.get(element).should('be.visible')
    }
  

    verifyTextcontentinElement(element, textvalue) {
      cy.get(element, { timeout: 10000 }).should('be.visible').contains(textvalue)
    }
  
    clickOnElement(element) {
      cy.get(element, { timeout: 10000 }).should('be.visible').click({force:true})
    }

  
    checkElementWithValue(element, chainer, value) {
      cy.get(element).should(chainer, value)
    }
  

  
    checkTextInElement(element, name) {
      cy.get(element).contains(name)
    }

  
    navigateToPath(urlPath) {
      cy.visit(`/${urlPath}`)
    }
  
    clickOnElementAndTypeValue(element,value)
    {
      cy.click(element,{force:true}).should('be.visible')
      cy.type(value)
    }

    changeViewportToMobile(viewport = 'iphone-x') {
      return cy.viewport(viewport)
    }
  
    clickOnHyperLinkedElement(element, index) {
      cy.get(element, { timeout: 10000 }).should('be.visible').eq(index).click()
    }
  
    getElementWithIndex(element, index) {
      return cy.get(element, { timeout: 10000 }).should('be.visible').eq(index)
    }
  
    clearInputInField(element) {
      cy.get(element).should('be.visible').clear()
    }
  
    typeInvalue(element, value) {
      cy.get(element, { timeout: 10000 }).should('be.visible').click({force:true}).clear().type(value)
    }
  
    goToPreviousPage()
    {
      cy.go('back')
    }
 
    clickonElementByText(dropdownElement, text) {
      cy.get(dropdownElement, { timeout: 10000 }).should('be.visible').click({force:true}) // click on drop down
      cy.contains(text).click({force:true}) // to select the option
    }

    hoveronElement(element){
        cy.get(element).invoke('show').click()
    }

    clickonHiddenElement(element)
    {
        cy.get(element,{ timeout: 10000 }).click({force:true})
    }

  }
  export default Utility
  