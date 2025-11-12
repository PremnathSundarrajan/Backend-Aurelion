const express = require("express");


const app = express();
app.use(express.json());
let products = [
  { id: 1, title: "Mixer", price: 3000 },
  { id: 2, title: "Phone", price: 5000 },
];

let count = 2;

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  let id = Number(req.params.id);
  const data = products.find((e) => e.id == id);
  res.send(data);
});

app.post("/products/add", (req, res) => {
  const { title, price } = req.body;
  const id = count + 1;
  count = count + 1;

  const data = { id: id, title: title, price: price };

  products.push(data);
  res.send(products);
});

app.put("/update", (req, res) => {
  const { id, title, price } = req.body;

  const data = { id: id, title: title, price: price };

  products = products = products.filter((p) => p.id != id);

  products.push(data);

  res.send(products);
});

app.delete("/del/:id", (req, res) => {
  const id = Number(req.params.id);

  products = products.filter((p) => p.id != id);

  res.send(products);
});

app.patch("/specific/update", (req, res) => {
  const body = req.body;
  let add;
  const data = products.find((e) => e.id == body.id);

  if (body.title && body.price) {
    add = { id: body.id, title: body.title, price: body.price };
  } else if (body.title) {
    add = { id: body.id, title: body.title, price: data.price };
  } else if (body.price) {
    add = { id: body.id, title: data.title, price: body.price };
  }

  products = products.filter((e) => e.id != body.id);

  products.push(add);

  res.send(products);
});

app.listen(3000, () => {
  console.log("server is running ");
});
