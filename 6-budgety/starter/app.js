let budgetController = (function () {
    let x = 23

    let add = function (a) {
        return x + a
    }
    return {
        publicTest: function (b) {
            return (add(b))
        }
    }
})();

let uiController = (function () {

})()

let appController = (function (budgetCtrl, uiCtrl) {
    let z = budgetCtrl.publicTest(32)

    return {
        anotherPublicMethod: function () {
            console.log(z)
        }
    }
})(budgetController, uiController)