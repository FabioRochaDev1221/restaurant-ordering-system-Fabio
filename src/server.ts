import http from "node:http";
import { version } from "node:os";

const port = 3000;

const routes = {
    "/":{
            message: "Pagina restaurante",
    },

    "/categorias": {
        message: "Lista de categorias",
    },

    "/produtos": {
        message: "Lista de produtos",
    },
};

const server = http.createServer((req, res) => {
    const response = routes[req.url as keyof typeof routes];

    if (!response){
            res.writeHead(404, {
            "content-type": "application/json",
        });

        return res.end(JSON.stringify({message: "Rota Não encontrada"}));
    }
    res.writeHead(200, {
        "content-type": "application/json",
    });

    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
})