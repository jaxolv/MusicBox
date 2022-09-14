import ListArtistsService from "../../services/artist/ListArtistsService";

export default class ListArtistsController {
    constructor() { this.service = new ListArtistsService(); }

    async listAll(req, res) {
        const list = await this.service.listArtists();

        return res.json(list)
    }

    async listByInstrument(req, res) {
        const { instrument } = req.params

        const list = await this.service.listArtistByInstrument(instrument);

        return res.json(list)
    }
}
