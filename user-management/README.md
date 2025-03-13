## **Step-by-Step Implementation 🚀 **

### **Step 1: Project Setup**
1. Create a new **Vite + React** project:
   ```sh
   npm create vite@latest user-management --template react
   cd user-management
   npm install
   ```
2. Install required dependencies:
   ```sh
   npm install react-router-dom axios zustand react-hook-form @tanstack/react-query antd
   ```
   - `react-router-dom` → For navigation (Login, Dashboard, etc.)
   - `axios` → For API calls
   - `zustand` → For global state management
   - `react-hook-form` → For form validation
   - `@tanstack/react-query` → For efficient API handling
   - `antd` → For UI components

---

### **Step 2: Authentication System**
#### **2.1 Create Login Page**
1. Implement a `LoginPage.tsx` component with a form.
2. Use `react-hook-form` for validation.
3. Call the **ReqRes API** (`POST /login`) when the form is submitted.
4. Store authentication status using **Zustand**.
5. Credentials for Admin:
Username: admin
Password: admin123
6. Redirect to the dashboard on successful login.
7. Show error messages for incorrect credentials.
---

### **Step 3: Dashboard with User Management**
#### **3.1 Fetch and Display Users**
1. Create a `Dashboard.tsx` component.
2. Use `TanStack Query (React Query)` to fetch users (`GET /users`).
3. Display users in an **Ant Design Table**.
4. Implement:
   - **Loading state** (Skeleton UI)
   - **Error handling** (Show error messages)

#### **3.2 View User Details**
1. Implement a `UserDetails.tsx` page.
2. Fetch a **single user** (`GET /users/{id}`).
3. Display user details in a **modal or new page**.

#### **3.3 Search & Filtering**
1. Implement a search bar (`useState`).
2. Filter users **by name or email**.
3. Update state dynamically.

#### **3.4 Sorting & Pagination**
1. Use `useReducer` to handle sorting logic.
2. Implement pagination in the user table.

---

### **Step 4: Create, Update, and Delete Users**
#### **4.1 Create New Users**
1. Implement a `CreateUser.tsx` form.
2. Use `react-hook-form` for validation.
3. Call `POST /users` to create a user.
4. Show **success/error notifications** using Ant Design.

#### **4.2 Update User Details**
1. Implement an `EditUser.tsx` form.
2. Fetch user details and pre-fill the form.
3. Call `PUT /users/{id}` for updates.

#### **4.3 Partially Update Users**
1. Implement **role or status updates** using `PATCH /users/{id}`.

#### **4.4 Delete Users**
1. Add a **delete button** in the user list.
2. Call `DELETE /users/{id}`.
3. Show a **confirmation modal** before deleting.

---

### **Step 5: Register & Login System**
1. Create a `RegisterPage.tsx`.
2. Implement a form using `react-hook-form`.
3. Call `POST /register` API.
4. Store the user session using **Zustand**.

---

### **Step 6: State Management**
#### **6.1 Global State with Zustand**
1. Create a **Zustand store** to store:
   - Authentication state
   - User list (to avoid refetching data)
   - API error states

#### **6.2 Context API for Authentication**
1. Create an `AuthContext.tsx` to manage authentication globally.

---

### **Step 7: UI Enhancements & API Handling**
1. **Design improvements** using **Ant Design components**.
2. **Loading states** with **Skeleton loaders**.
3. **Error handling** for API failures.

---

### **Step 8: Stretch Goals (Optional)**
- **Dark Mode:** Use `useContext` for theme switching.
- **Pagination:** Improve performance with **server-side pagination**.
- **Role-Based Access:** Different views for Admin & Users.
