import express from "express";
import {randomUUID} from "node:crypto";

const app = express();

app.use(express.json());

const pizzaCategoryId = randomUUID();
const drinkCategoryId = randomUUID();

const categories = [
  {
    "id": randomUUID(),
    "name": "Pizzas",
    "description": "Pizzas salgadas e especiais preparadas com ingredientes selecionados."
  },
  {
    "id": randomUUID(),
    "name": "Bebidas",
    "description": "Bebidas geladas para acompanhar sua refeição."
  },
  {
    "id": randomUUID(),
    "name": "Sobremesas",
    "description": "Opções doces para finalizar o pedido."
  }
];

const products = [
  {
    "id": randomUUID(),
    "categoryId": 1,
    "name": "Calabresa",
    "description": "Molho de tomate, queijo mussarela, calabresa fatiada e cebola.",
    "price": 42.90
  },
  {
    "id": randomUUID(),
    "categoryId": 1,
    "name": "Frango com Catupiry",
    "description": "Molho de tomate, queijo mussarela, frango desfiado e Catupiry.",
    "price": 45.90
  },
  {
    "id": randomUUID(),
    "categoryId": 1,
    "name": "Quatro Queijos",
    "description": "Mussarela, provolone, parmesão e gorgonzola.",
    "price": 47.90
  },
  {
    "id": randomUUID(),
    "categoryId": 1,
    "name": "Margherita",
    "description": "Molho de tomate, mussarela, tomate fresco e manjericão.",
    "price": 41.90
  },
  {
    "id": randomUUID(),
    "categoryId": 2,
    "name": "Coca-Cola 2L",
    "description": "Refrigerante Coca-Cola tradicional em garrafa de 2 litros.",
    "price": 12.90
  },
  {
    "id": randomUUID(),
    "categoryId": 2,
    "name": "Guaraná Antarctica 2L",
    "description": "Refrigerante Guaraná Antarctica em garrafa de 2 litros.",
    "price": 11.90
  },
  {
    "id": randomUUID(),
    "categoryId": 2,
    "name": "Suco de Laranja 1L",
    "description": "Suco de laranja natural, pronto para servir.",
    "price": 14.90
  },
  {
    "id": randomUUID(),
    "categoryId": 3,
    "name": "Pizza de Chocolate",
    "description": "Massa de pizza coberta com chocolate ao leite e granulado.",
    "price": 39.90
  },
  {
    "id": randomUUID(),
    "categoryId": 3,
    "name": "Brownie",
    "description": "Brownie de chocolate servido com cobertura de chocolate.",
    "price": 12.90
  },
  {
    "id": randomUUID(),
    "categoryId": 3,
    "name": "Pudim",
    "description": "Pudim de leite condensado com calda de caramelo.",
    "price": 10.90
  }
];

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Restaurante API",
        version: "1.0.0"
    })

})

app.get("/categories", (req, res) => {
    res.status(200).json(categories)

})

app.get("/categories/:id", (req, res) => {
    const category = categories.find((category) => {
        return category.id == req.params.id;
    })

    if (!category){
        return res.status(404).json({
            message: "Categoria não encontrada",
        });
    }

    res.status(200).json(category);
});

app.post("/categories", (req, res) => {
    const category = req.body;
    categories.push(category);
    res.status(201).json(category);
})

app.get("/products", (req, res) => {
    res.status(200).json(products)

})

app.get("/products/:id", (req, res) => {
    const product = products.find((product) => {
        return product.id == req.params.id;
    })

    if (!product){
        return res.status(404).json({
            message: "Produto não encontrada",
        });
    }

    res.status(200).json(product);
});

app.post("/products", (req, res) => {
    const product = req.body;
    categories.push(product);
    res.status(201).json(product);
})
export default app;