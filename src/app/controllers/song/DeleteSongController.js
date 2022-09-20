import DeleteSongService from "../../services/songs/DeleteSongService";

export default class DeleteSongController {
    constructor() { this.service = new DeleteSongService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseSong(id);

        return res.json(resulte)
    }
}
