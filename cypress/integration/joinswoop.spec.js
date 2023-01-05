///<reference types ="cypress" />


import createAccount from "../pages/createAccount"
import goals from "../pages/Goals"
import improveCashFlowFundingRequirements from "../pages/improveCashFlowFundingRequirements"
import JoinPage from "../pages/joinpage"
import vehicleFinance from "../pages/vehicleFinance"

import Utility from "../utility"

const ut = new Utility;
const jp= new JoinPage;
const gls=new goals
const ic=new improveCashFlowFundingRequirements;
const vf= new vehicleFinance
const ca= new createAccount;
describe('Join swoop and explore functionalities',
()=> {

    beforeEach(function() {
        cy.fixture('improveCashFlow.json').then(function(cashdataflow){
            this.cashdataflow=cashdataflow
        })
        cy.fixture('profileDetails.json').then(function(profileDetails){
            this.profileDetails=profileDetails
        })

        cy.fixture('vehicleFinance.json').then(function(vehicleFinance){
            this.vehicleFinance=vehicleFinance
        })
        cy.visit('/')
        cy.get(jp.joinswoop).invoke('removeAttr', 'target').click()
        cy.url()
            .then((url) => {
                expect(url).to.contain('goals')

            })
        ut.verifyTextinurl("goals")
    })
    it("Improve Cashflow and funding requirements",function()
            {
              ut.clickonHiddenElement(gls.selectImproveCashFlow)
               ut.typeInvalue(ic.inputAmount,this.cashdataflow.funding)
               ut.clickonElementByText(ic.whenYouNeedFunding, this.cashdataflow.fundingUpto1Week)
               ut.typeInvalue(ic.fundDescription, this.cashdataflow.fundingNeeds)
               ut.clickonElementByText(ic.operateSectorDropDown,this.cashdataflow.SectorYouOperate)
               ut.clickOnElement(ic.isCurrentlyTradingNo)
               ut.typeInvalue(ic.lastFinancialTurnOver,this.cashdataflow.turnOverLastYear)
               ut.typeInvalue(ic.monthlyRecurringRevenue,this.cashdataflow.monthlyRecurringRevenue)
               ut.clickOnElement(ic.businessProfitLastFinancialYear)
               ut.clickOnElement(ic.businessTakePaymentsViaCardmachine)
               ut.clickOnElement(ic.businessSendInvoiceToCustomers)
               ut.clickOnElement(ic.isHomeOwnerFalse)
               ut.clickonElementByText(ic.mainBank,this.cashdataflow.mainBank)
               ut.clickOnElement(ic.nextbutton)
    //Enter personal details
                ut.verifyTextinurl("improve-cashflow/sign-up")
                ut.typeInvalue(ca.firstName, this.profileDetails.firstName)
                ut.typeInvalue(ca.lastName, this.profileDetails.LastName)
                ut.typeInvalue(ca.contactNumber, this.profileDetails.contactNumber)
                ut.typeInvalue(ca.email, this.profileDetails.email)
                ut.elementIsVisible(ca.signUpButton)
            }

    )


    it("Vehicle Finance",function()
    {
        ut.clickonHiddenElement(gls.selectImproveVehicleFinance)
        ut.clickOnElement(vf.contractSigned)
        ut.clickonElementByText(vf.vehiclePurchase, this.vehicleFinance.vehicletype)
        ut.clickOnElement(vf.vehicleCondition)
        ut.typeInvalue(vf.purchasePrice,this.vehicleFinance.purchasePrice)
        ut.typeInvalue(vf.amountToBeBorrowed, this.vehicleFinance.borrowAmount)
        ut.typeInvalue(vf.cashDepositAvailable,this.vehicleFinance.cashDepositAvailable)
        ut.clickOnElement(vf.modeofPurchase)
        ut.clickonElementByText(vf.financeLength,this.vehicleFinance.financeDuration)
        ut.clickOnElement(vf.readyToPurchaseVehicle)
        ut.clickOnElement(ic.nextbutton)
        //Enter Funding requirements
        ut.clickOnElement(vf.tradingAsPartnership)
        ut.clickonElementByText(vf.industry,this.cashdataflow.SectorYouOperate)
        ut.clickonElementByText(vf.tradingStart,this.vehicleFinance.tradingDuration)
        ut.typeInvalue(vf.totalTurnOver,this.vehicleFinance.totalTurnOver)
        ut.clickOnElement(vf.businessBeenProfitableTrue)
        ut.clickOnElement(vf.companyHasExistingLoan)
        ut.clickOnElement(vf.companyPayVATYes)
        ut.typeInvalue(vf.vatAmount,this.vehicleFinance.vatAmount)
        ut.clickonElementByText(vf.accountancySoftware,this.vehicleFinance.accountancySoftware)
        ut.clickonElementByText(ic.mainBank,this.cashdataflow.mainBank)
        ut.clickOnElement(ic.nextbutton)
        //Enter personal details
        // ut.verifyTextinurl("improve-cashflow/sign-up")
        ut.typeInvalue(ca.firstName, this.profileDetails.firstName)
        ut.typeInvalue(ca.lastName, this.profileDetails.LastName)
        ut.typeInvalue(ca.contactNumber, this.profileDetails.contactNumber)
        ut.typeInvalue(ca.email, this.profileDetails.email)
        ut.elementIsVisible(ca.signUpButton)



    })
        })