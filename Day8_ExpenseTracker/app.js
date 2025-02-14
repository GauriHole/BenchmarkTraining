// Categories Enum
var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Travel"] = "Travel";
    Category["Bills"] = "Bills";
    Category["Shopping"] = "Shopping";
    Category["Other"] = "Other";
})(Category || (Category = {}));

var form = document.getElementById("expense-form");
var amountInput = document.getElementById("amount");
var descriptionInput = document.getElementById("description");
var dateInput = document.getElementById("date");
var categoryInput = document.getElementById("category");
var expenseList = document.getElementById("expense-list");

var expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
renderExpenses();
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var newExpense = {
        amount: parseFloat(amountInput.value),
        description: descriptionInput.value,
        date: dateInput.value,
        category: categoryInput.value,
    };
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
    form.reset();
});

function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach(function (expense) {
        var li = document.createElement("li");
        li.textContent = "".concat(expense.date, " - ").concat(expense.category, ": $").concat(expense.amount, " (").concat(expense.description, ")");
        expenseList.appendChild(li);
    });
}
