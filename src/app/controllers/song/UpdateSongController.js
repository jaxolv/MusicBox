import UpdateAlbumService from "../../services/albums/UpdateAlbumService";

export default class UpdateAlbumController {
    constructor() { this.service = new UpdateAlbumService() }

    async update(req, res) {
        const { id } = req.params
        const {
            title,
            release,
            genre,
            band_id
        } = req.body

        const resulte = await this.service.updateAlbum(
            id,
            title,
            release,
            genre,
            band_id
        )

        return res.json(resulte)
    }
}