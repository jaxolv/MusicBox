import UpdateDurationSongService from "../../services/songs/UpdateDurationService";

export default class UpdateDurationSongController {
    constructor() { this.service = new UpdateDurationSongService() }

    async update(req, res) {
        const { id } = req.params
        const { duration } = req.body

        const resulte = await this.service.updateDuration(id, duration)

        return res.json(resulte)
    }
}
