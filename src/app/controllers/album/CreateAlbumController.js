import CreateAlbumService from "../../services/albums/CreateAlbumService";

export default class CreateAlbumController {
    constructor() { this.service = new CreateAlbumService() };

    async create(req, res) {
        const {
            title,
            release,
            genre,
            band_id
        } = req.body

        const artist = await this.service.newAlbum(
            title,
            release,
            genre,
            band_id
        )

        return res.status(201).json(artist)
    }
}