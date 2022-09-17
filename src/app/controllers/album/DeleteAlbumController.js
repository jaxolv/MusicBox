import DeleteAlbumService from "../../services/albums/DeleteAlbumService";

export default class DeleteAlbumController {
    constructor() { this.service = new DeleteAlbumService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseAlbum(id);

        return res.json(resulte)
    }
}