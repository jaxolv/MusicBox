import DeleteArtistService from "../services/artist/DeleteArtistService";

export default class DeleteArtistController {
    constructor() { this.service = new DeleteArtistService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseArtist(id);

        return res.json(resulte)
    }
}