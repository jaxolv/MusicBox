import express from "express";
import db from "./database";

import routesArtists from "./routes/artist/routesArtists";
import routesBands from "./routes/band/routesBands";
import routesMembers from "./routes/members/routesMembers";
import routesAlbums from "./routes/album/routesAlbums";
import routesSongs from "./routes/song/routesSongs"
import routesSongwriters from "./routes/songwriters/routesSongwriters";

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
        this.server.use(routesArtists);
        this.server.use(routesBands);
        this.server.use(routesMembers);
        this.server.use(routesAlbums);
        this.server.use(routesSongs);
        this.server.use(routesSongwriters);
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