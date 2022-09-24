import DeleteSongwriterService from "../../services/songwriters/DeleteSongwriterService";

export default class DeleteSongwriterController {
    constructor() { this.service = new DeleteSongwriterService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseSongwriter(id);

        return res.json(resulte)
    }
}