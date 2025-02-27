# React App (Product CRUD)  with FakeStore API
This is a simple Vite + React application that performs CRUD operations (Create, Read, Update, Delete) using the FakeStore API. It is styled with the Ant Design UI library.

## Features
- View all products
- View a single product
- Add a new product
- Edit an existing product
- Delete a product with confirmation modal
- Styled using Ant Design

## Technologies Used
- React with Vite
- TypeScript
- React Router
- Ant Design (UI components)
- FakeStore API (Mock backend)

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
/src
 ├── api          # API calls to FakeStore API
 ├── components   # Reusable UI components
 ├── pages        # Main pages (ProductList, ProductForm, etc.)
 ├── router.tsx   # App routing configuration
 ├── main.tsx     # Main entry point
 ├── index.css    # Global styles
```

## API Endpoints Used
- **Get all products**: `GET https://fakestoreapi.com/products`
- **Get single product**: `GET https://fakestoreapi.com/products/:id`
- **Add product**: `POST https://fakestoreapi.com/products`
- **Update product**: `PUT https://fakestoreapi.com/products/:id`
- **Delete product**: `DELETE https://fakestoreapi.com/products/:id`

## How to Use
1. **View Products**: The homepage displays a list of all products.
2. **Add Product**: Click the "Add Product" button, fill in the form, and submit.
3. **Edit Product**: Click "Edit" on any product, update details, and save.
4. **Delete Product**: Click "Delete", confirm the modal, and remove the product.

## Additional Features
- Confirmation modal before deleting a product.
- Success messages when adding, updating, or deleting a product.

## Running the Build Version
To create a production build:
```sh
npm run build
```

Then, you can serve it using:
```sh
npm run preview
```

## License
This project is open-source and available for learning and improvement.

