import express from "express";
import db from "./database";

import routesArtists from "./routes/artist/routesArtists";
import routesBands from "./routes/band/routesBands";

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

    routesArtists() {
        this.server.use(routesArtists);
    }

    routesBands() {
        this.server.use(routesBands);
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