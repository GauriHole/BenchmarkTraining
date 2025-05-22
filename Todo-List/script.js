document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const deleteAllButton = document.getElementById("delete-all");

  // Add Task Event
  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value.trim();
    if (text !== "") {
      createTodo(text);
      inputTodo.value = "";
      saveAllTodo();
    }
  });

  // Function to Create a New Todo Item
  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-start";
    
    li.innerHTML = `
      <span class="text-todo">${task}</span>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-danger">Edit</button>
        <button type="button" class="btn btn-warning">Delete</button>
      </div>
    `;
    
    ulTodo.appendChild(li);
  };

  // Event Delegation for Edit and Delete Buttons
  ulTodo.addEventListener("click", (e) => {
    const li = e.target.closest(".list-group-item");

    // Delete Functionality
    if (e.target.classList.contains("btn-warning")) {
      li.remove();
      saveAllTodo();
    }

    // Edit/Save Functionality
    if (e.target.classList.contains("btn-danger")) {
      const span = li.querySelector(".text-todo");

      if (!li.classList.contains("editing")) {
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.className = "form-control form-control-sm";
        input.style.flex = "1"; 
        li.replaceChild(input, span);

        e.target.textContent = "Save";
        li.classList.add("editing");

        input.focus(); 
      } else {
        const input = li.querySelector("input");
        const updatedText = input.value.trim();

        if (updatedText !== "") {
          const newSpan = document.createElement("span");
          newSpan.className = "text-todo";
          newSpan.textContent = updatedText;

          li.replaceChild(newSpan, input);
          e.target.textContent = "Edit";
          li.classList.remove("editing");

          saveAllTodo();
        }
      }
    }
  });

  // Delete All Button Functionality
  deleteAllButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
      ulTodo.innerHTML = "";
      localStorage.removeItem("allTodos");
    }
  });

  // Save All Todos to localStorage
  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );
    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  // Load Todos from localStorage on Page Load
  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo(); // Load saved tasks on page load
});
