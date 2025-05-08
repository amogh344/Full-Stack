const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Sample product data
let products = [
  { id: 1, name: 'Laptop', price: 70000 },
  { id: 2, name: 'Mobile phone', price: 25000 }
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello, Express!<a href="https://www.youtube.com/dost2web/">Subscribe My Dost2web Channel</a>');
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add new product
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// Update product by ID
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
});

// Delete product by ID
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});