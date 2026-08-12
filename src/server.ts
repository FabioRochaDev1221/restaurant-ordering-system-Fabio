import http from "node:http";
import { version } from "node:os";

const port = 3000;

const server = http.createServer((req, res) => {
    const response = {
        message: "API restaurante",
        version: "1.0.0",
        outros: "XPTO"
    };

    res.writeHead(200, {
        "content-type": "application/json",
    });

    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
})