import ListAlbumService from "../../services/albums/ListAlbumService";

export default class ListAlbumsController {
    constructor() { this.service = new ListAlbumService(); }

    async listByIdBand(req, res) {
        const { id } = req.params

        const list = await this.service.listAlbumsByBand(id);

        if (list.message) { return res.status(200).json(list)}

        return res.json(list)
    }

    async listAll(req, res) {
        const list = await this.service.listAllAlbums();

        return res.json(list)
    }
}
