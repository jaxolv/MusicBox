import ListSongsService from "../../services/songs/ListSongsService";

export default class ListAlbumsController {
    constructor() { this.service = new ListSongsService(); }

    async listByIdAlbum(req, res) {
        const { id } = req.params

        const list = await this.service.listSongsByAlbum(id);

        return res.json(list)
    }

    async listAll(req, res) {
        const list = await this.service.listAllSongs();

        if (list.length === 0) {
            return res.status(204).json(list)
        }

        return res.json(list)
    }
}
