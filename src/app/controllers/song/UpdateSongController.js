import UpdateSongService from "../../services/songs/UpdateSongService";

export default class UpdateAlbumController {
    constructor() { this.service = new UpdateSongService() }

    async update(req, res) {
        const { id } = req.params
        const {
            title,
            subtitle,
            track,
            duration,
            album_id
        } = req.body

        const resulte = await this.service.updateSong(
            id,
            title,
            subtitle,
            track,
            duration,
            album_id
        )

        return res.json(resulte)
    }
}