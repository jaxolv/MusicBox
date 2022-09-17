import ListAlbumService from "../../services/albums/ListAlbumService";

export default class ListAlbumsController {
    constructor() { this.service = new ListAlbumService(); }

    async listByIdBand(req, res) {
        const { id } = req.params

        const list = await this.service.listAlbumsByBand(id);

        return res.json(list)
    }

    async listByNameBand(req, res) {
        const { name } = req.query

        const list = await this.service.listAlbumsByNameOfTheBand(name);

        return res.json(list)
    }
}
