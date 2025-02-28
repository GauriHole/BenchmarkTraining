export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };
  
  export const fetchCarts = async () => {
    const response = await fetch('https://fakestoreapi.com/carts');
    return response.json();
  };
  
  export const updateProduct = async (id: number, product: any) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.json();
  };
  
  export const deleteProduct = async (id: number) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' });
  };
  
  export const addToCart = async (cart: any) => {
    const response = await fetch('https://fakestoreapi.com/carts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    return response.json();
  };
  
  export const updateCart = async (id: number, cart: any) => {
    const response = await fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    return response.json();
  };
  
  export const deleteCart = async (id: number) => {
    await fetch(`https://fakestoreapi.com/carts/${id}`, { method: 'DELETE' });
  };
  