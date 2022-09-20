import CreateSongService from "../../services/songs/CreateSongService";

export default class CreateSongController {
    constructor() { this.service = new CreateSongService() };

    async create(req, res) {
        const {
            title,
            subtitle,
            track,
            album_id
        } = req.body

        const song = await this.service.newSong(
            title,
            subtitle,
            track,
            album_id
        )

        return res.status(201).json(song)
    }
}