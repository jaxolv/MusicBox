import express from "express";
import routes from "./routes";
import db from "./database";

class App {
    constructor() {
        this.server = express();

        this.intializeDatabase();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    async intializeDatabase() {
        try {
            await db.authenticate();
            console.log("Conexão com o banco de dados estabelecida.")
        } catch(error) {
            console.log("Falha na conexão com o banco de dados: ", error.message)
        }
    }
}

export default new App().server;