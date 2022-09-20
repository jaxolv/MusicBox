import ListAlbumService from "../../services/albums/ListAlbumService";

export default class ListAlbumsController {
    constructor() { this.service = new ListAlbumService(); }

    async listByIdAlbum(req, res) {
        const { id } = req.params

        const list = await this.service.listSongsByAlbum(id);

        return res.json(list)
    }

    async listAll(req, res) {
        const list = await this.service.listAllSongs();

        return res.json(list)
    }
}
