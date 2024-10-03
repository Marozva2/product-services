import express, { json } from "express";
const app = express();
app.use(json());

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Create a new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
