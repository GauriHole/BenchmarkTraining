// Expense Interface
interface Expense {
  amount: number;
  description: string;
  date: string;
  category: Category;
}

// Categories 
enum Category {
  Food = "Food",
  Travel = "Travel",
  Bills = "Bills",
  Shopping = "Shopping",
  Other = "Other"
}

const form = document.getElementById("expense-form") as HTMLFormElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const descriptionInput = document.getElementById("description") as HTMLInputElement;
const dateInput = document.getElementById("date") as HTMLInputElement;
const categoryInput = document.getElementById("category") as HTMLSelectElement;
const expenseList = document.getElementById("expense-list") as HTMLUListElement;

let expenses: Expense[] = JSON.parse(localStorage.getItem("expenses") || "[]");
renderExpenses();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newExpense: Expense = {
    amount: parseFloat(amountInput.value),
    description: descriptionInput.value,
    date: dateInput.value,
    category: categoryInput.value as Category,
  };

  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
  form.reset();
});

function renderExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = `${expense.date} - ${expense.category}: $${expense.amount} (${expense.description})`;
    expenseList.appendChild(li);
  });
}
