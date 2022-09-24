import UpdateSongwriterService from "../../services/songwriters/UpdateSongwriterService";

export default class UpdateSongwriterController {
    constructor() { this.service = new UpdateSongwriterService() }

    async update(req, res) {
        const { id } = req.params
        const { song_id, artist_id } = req.body

        const resulte = await this.service.updateSongwriter(id, song_id, artist_id)

        return res.json(resulte)
    }
}