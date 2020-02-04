//BUDGET CONTROLLER
let budgetController = (function () {
    let Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value
    }

    let Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, des, val) {
            let newItem, ID;

            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0;
            }

            //create new item based on type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            //push it into our data structure
            data.allItems[type].push(newItem)

            //return the new element
            return newItem;
        },
        testing: function () {
            console.log(data)
        }
    }
})();

//UI CONTROLLER
let uiController = (function () {
    let DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
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
    let setUpEventListeners = function () {
        let DOM = uiCtrl.getDOMStrings() //calling it DOM here. this is the result of the function call, and it is stored in DOM, so below it is DOM.inputButton
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem)
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }

    let ctrlAddItem = function () {
        let input, newItem;
        //1. Get the field input data
        input = uiCtrl.getInput()

        //2. Add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)
        //3. Add the new item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI
    }

    return {
        init: function () {
            console.log('Application has started.')
            setUpEventListeners()
        }
    }
})(budgetController, uiController)

appController.init()

// Hindsight 20/20 and all, but I think the Dems should have pressed for a censure, knowing an acquittal was pretty much fucking guaranteed by Mitch.
