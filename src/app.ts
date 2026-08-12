import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Restaurante API",
        version: "1.0.0"
    })

})

app.get("/categorias", (req, res) => {
    res.status(200).json({
        message: "Lista de categorias",
    })

})

app.get("/produtos", (req, res) => {
    res.status(200).json({
        message: "Lista de produtos",
    })

})

export default app;