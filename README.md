![5](https://github.com/user-attachments/assets/41e17c96-185a-4e81-8372-937d9a5e6352)

**Steps to be Followed ↕️**

**1. Start**

**2. DOMContentLoaded Event Listener**  
- **Event:** Wait for the document to fully load.

**3. Initialize Variables**  
- **Get references to:**  
  - `inputTodo`: Input field for new tasks.  
  - `buttonTodo`: Button to add tasks.  
  - `ulTodo`: Unordered list to display tasks.  
  - `deleteAllButton`: Button to delete all tasks.

**4. Load Saved Tasks**  
- **Call** `loadAllTodo()`  
  - **Retrieve tasks from** `localStorage`.  
  - **For each task:**  
    - **Call** `createTodo(task)` **to display it in the list**.

**5. Add Task Button Click Event (`buttonTodo`)**  
- **User clicks** **Add** **button.**  
- **Check if input is not empty:**  
  - **Yes:**  
    - **Call** `createTodo(input value)` **to add task to the list.**  
    - **Clear the input field.**  
    - **Call** `saveAllTodo()` **to save tasks to** `localStorage`.  
  - **No:**  
    - **Do nothing.**

**6. Create Todo Function (`createTodo(task)`)**  
- **Create a new list item (`li`) with:**  
  - **Task text.**  
  - **Edit** **and** **Delete** **buttons.**  
- **Append the new item to** `ulTodo`.

**7. Event Delegation on Todo List (`ulTodo.click`)**  
- **If Delete Button Clicked:**  
  - **Remove the corresponding task (`li`).**  
  - **Call** `saveAllTodo()`.  
  
- **If Edit Button Clicked:**  
  - **If not in editing mode:**  
    - **Replace task text with an input box.**  
    - **Change button text to** **Save**.  
    - **Add** `editing` **class to** `li`.  
  - **If in editing mode (Save clicked):**  
    - **Get updated input value.**  
    - **If not empty:**  
      - **Replace input with updated task text.**  
      - **Change button text back to** **Edit**.  
      - **Remove** `editing` **class from** `li`.  
      - **Call** `saveAllTodo()`.

**8. Delete All Button Click Event (`deleteAllButton`)**  
- **On click, show confirmation dialog:**  
  - **If confirmed:**  
    - **Clear all tasks from** `ulTodo`.  
    - **Remove** `allTodos` **from** `localStorage`.

**9. Save All Todos Function (`saveAllTodo()`)**  
- **Get all current tasks from the DOM.**  
- **Convert them to an array of text.**  
- **Save the array to** `localStorage`.

