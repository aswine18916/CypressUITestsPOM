import improveCashFlowFundingRequirements from "./improveCashFlowFundingRequirements"

class VehicleFinance extends improveCashFlowFundingRequirements
{
    contractSigned="input[id=\"0bb8dbcc-454b-423b-bf95-a39ff59141c3-Yes, contract is signed!\"]"
    vehiclePurchase="div[id=\"f4fb43d2-21ce-45bf-8f9e-c9834f088d6c-select-id\"]>div"
    vehicleCondition="input[id=\"65ece4f0-cb5c-44ed-88c2-049271d17389-New\"]"
    purchasePrice="input[id=\"9828460c-8818-41dd-9195-0191f79900e3\"]"
    amountToBeBorrowed="input[id=\"39a268ca-1b2a-42ed-a6e6-3fcec6025896\"]"
    cashDepositAvailable="input[id=\"5758e64c-0222-45e7-b4dc-a632d24b2a7a\"]"
    modeofPurchase="input[id=\"403be487-13e6-4478-b239-460737b5cf6b-Lease\"]"
    financeLength="div[class=\"select-menu-value\"]>input[value=\"1\"]+p"
    readyToPurchaseVehicle="input[id=\"c0582b87-5cee-4081-aca2-9ef43a2d5fd7-true\"]"
    //funding requirements
    tradingAsPartnership="input[id=\"aa36db5b-b23e-44eb-bd9d-aa6b80425ba3-Partnership\"]"
    industry=".multiselect__tags"
    vatAmount="input[id=\"6aee1151-f2e8-4697-b74a-eb7cce28f7f1\"]"
    tradingStart=".select-menu-value>input[value=\"2-5 years\"]+p"
    totalTurnOver="input[id=\"b359ffbe-13b1-4198-a1aa-408c4bb4d77a\"]"
    businessBeenProfitableTrue="input[id=\"3276d1a2-3e7a-43ae-bcd6-28d71d38ce2f-true\"]"
    companyHasExistingLoan="input[id=\"bb326981-1900-48c2-bfa3-a3c3823e06f3-false\"]"
    companyPayVATYes="input[id=\"6d83314d-3fdf-46ba-8a2f-86006a9e8054-true\"]"
    accountancySoftware="input[id=\"1-43066aa9-7027-48f4-8e55-c989a015bbe9\"]+p"
}

export default VehicleFinance