//BUDGET CONTROLLER
let budgetController = (function () {

})();

//UI CONTROLLER
let uiController = (function () {
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        button: '.add__btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //will be either "inc" or "exp"
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }

        },
        getDOMStrings: function () {
            return DOMStrings;
        }
    }
})()

//GLOBAL APP CONTROLLER
let appController = (function (budgetCtrl, uiCtrl) {
    let DOM = uiCtrl.getDOMStrings()
    let ctrlAddItem = function () {
        //1. Get the field input data
        let input = uiCtrl.getInput()
        console.log(input)

        //2. Add item to budget controller

        //3. Add the new item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    }
    document.querySelector(DOM.button).addEventListener('click', ctrlAddItem)
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }
    })
})(budgetController, uiController)