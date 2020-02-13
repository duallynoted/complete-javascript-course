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
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //will be either "inc" or "exp"
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function (obj, type) {
            let htmlString, newHTML, element;
            //create html string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer
                htmlString = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div>' +
                    '<div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
            }
            if (type === 'exp') {
                element = DOMStrings.expensesContainer
                htmlString = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div>' +
                    '<div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div>' +
                    '<div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div> </div> </div>'
            }
            //replace the placeholder text with actual data
            newHTML = htmlString.replace('%id%', obj.id)
            newHTML = newHTML.replace('%description%', obj.description)
            newHTML = newHTML.replace('%value%', obj.value)

            // insert the html in to the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML)
        },

        clearFields: function () {
            let fields, fieldsArray;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue)
            fieldsArray = Array.prototype.slice.call(fields)
            fieldsArray.forEach(function (current, index, array) {
                current.value = ""
            })
            fieldsArray[0].focus()
            console.log(fields, fieldsArray)

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

    let updateBudget = function () {
        //1. Calculate the budget

        //2. return the budget

        //3. Display the budget on the UI
    }
    let ctrlAddItem = function () {
        let input, newItem;
        //1. Get the field input data
        input = uiCtrl.getInput()
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //2. Add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value)
            //3. Add the new item to the UI
            uiController.addListItem(newItem, input.type)
            //4. clear the filds
            uiController.clearFields()
            //5. Calculate and update budget
            updateBudget()
        }
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
