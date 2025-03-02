## 📌 Project Overview
This is a React-based application that implements CRUD operations for **products and carts** using the **FakeStore API**. The app is built using:

- **React with TypeScript**
- **Zustand** for state management
- **Ant Design** for UI components
- **Vite** as the build tool

## 🚀 Features
- **Product Management:**
  - View all products
  - Add a new product
  - Edit a product
  - Delete a product
- **Cart Management:**
  - View all carts
  - Add products to the cart
  - Edit cart items
  - Remove items from the cart

## 🏗️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/project-name.git
cd project-name
```

### 2️⃣ Install Dependencies
```sh
npm install  # or yarn install
```

### 3️⃣ Start the Development Server
```sh
npm run dev  # or yarn dev
```

## 📂 Project Structure
```
/src
│── components
│   ├── ProductList.tsx
│   ├── ProductDetails.tsx
│   ├── ProductForm.tsx
│   ├── CartList.tsx
│   ├── CartDetails.tsx
│   ├── CartForm.tsx
│
│── store
│   ├── cartStore.ts
│
│── services
│   ├── product.ts
│   ├── cart.ts
│
│── pages
│   ├── Cart.tsx
│
│── router.tsx
│
│── App.tsx
```

## 🔗 API Endpoints (FakeStore API)
- **Products:** `https://fakestoreapi.com/products`
- **Carts:** `https://fakestoreapi.com/carts`

## 🛠️ Usage Guide
1. Open the app in your browser (`http://localhost:5173`).
2. View the list of products fetched from the API.
3. Click **"Add to Cart"** to add a product to the cart.
4. Use **Edit** or **Delete** options to manage products and carts.

## 🐞 Troubleshooting
- If the app doesn't show products, check the API response in the **browser console (F12 > Console)**.
- If `add to cart` doesn't update the UI, verify Zustand state updates in `cartStore.ts`.
- Restart the server after making changes: `Ctrl + C`, then `npm run dev`.

## 📜 License
This project is licensed under the MIT License.

