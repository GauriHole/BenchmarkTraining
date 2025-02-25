# ShopEasy - E-Commerce Website

## 📌 Project Overview
ShopEasy is a simple e-commerce website built with **React, TypeScript, React Query, and React Router**. It fetches product data from an API and allows users to view product details and add items to a shopping cart.

## 🚀 Features
- **Home Page**: Displays all products.
- **Product Listing**: Fetches and displays products from FakeStore API.
- **Product Details Page**: Shows detailed information about a product when clicked.
- **Shopping Cart**: Allows users to add items to the cart.
- **Navigation**: Includes links to Home, About, and different product categories.

## 🛠️ Technologies Used
- **React** (for UI)
- **TypeScript** (for type safety)
- **React Router** (for navigation)
- **React Query** (for API calls & data fetching)
- **Axios** (for making API requests)
- **CSS** (for styling)

## 📂 Folder Structure
```
ShopEasy/
│── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductDetails.tsx
│   ├── context/
│   │   ├── CartContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│── public/
│── package.json
│── README.md
```

## 📦 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/ShopEasy.git
cd ShopEasy
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
> Open `http://localhost:5173/` in your browser (for Vite-based projects)


## 🔗 API Used
- [FakeStore API](https://fakestoreapi.com/) - Used to fetch product details.

## 📜 How It Works
1. **Home Page (`/`)**: Displays all products.
2. **Product Details (`/product/:id`)**: Clicking on a product shows details fetched via `useQuery`.
3. **Cart**: Users can add products to their cart.
4. **Navigation**: Provides links to different pages.
