import CreateSongwriterService from "../../services/songwriters/CreateSongwriterService";

export default class CreateSongwriterController {
    constructor() {
        this.service = new CreateSongwriterService();
    }

    async create(req, res) {
        const { song_id, artist_id } = req.body

        const writer = await this.service.newSongwriter(song_id, artist_id)

        return res.status(201).json(writer)
    }
}
