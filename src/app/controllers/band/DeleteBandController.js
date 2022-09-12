import DeleteBandService from "../../services/band/DeleteBandService";

export default class DeleteBandController {
    constructor() { this.service = new DeleteBandService() }

    async delete(req, res) {
        const { id } = req.params
        
        const resulte = await this.service.eraseBand(id);

        return res.json(resulte)
    }
}