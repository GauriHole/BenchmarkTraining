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
<p align="center">
  <img src="https://github.com/user-attachments/assets/839b04bf-10bf-423b-9c70-d2fff37f5345" alt="Description" style="width:50%;">
</p>


**5. Add Task Button Click Event (`buttonTodo`)**  
- **User clicks** **Add** **button.**  
- **Check if input is not empty:**  
  - **Yes:**  
    - **Call** `createTodo(input value)` **to add task to the list.**  
    - **Clear the input field.**  
    - **Call** `saveAllTodo()` **to save tasks to** `localStorage`.  
  - **No:**  
    - **Do nothing.**
<p align="center">
  <img src="https://github.com/user-attachments/assets/2d0359fc-13f2-4f54-bf88-154c7bea4ab4" alt="Description" style="width:50%;">
</p>

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
<p align="center">
  <img src="https://github.com/user-attachments/assets/45c0878e-55b5-45d8-ba2e-d0f11eabfb3b" alt="Description" style="width:50%;">
</p>

**8. Delete All Button Click Event (`deleteAllButton`)**  
- **On click, show confirmation dialog:**  
  - **If confirmed:**  
    - **Clear all tasks from** `ulTodo`.  
    - **Remove** `allTodos` **from** `localStorage`.
<p align="center">
  <img src="https://github.com/user-attachments/assets/554bf157-5951-42da-bcb7-b670398ed86c" alt="Description" style="width:50%;">
</p>

**9. Save All Todos Function (`saveAllTodo()`)**  
- **Get all current tasks from the DOM.**  
- **Convert them to an array of text.**  
- **Save the array to** `localStorage`.
<p align="center">
  <img src="https://github.com/user-attachments/assets/31ccc111-4e65-4666-aec4-1c82fac36e08" alt="Description" style="width:50%;">
</p>

