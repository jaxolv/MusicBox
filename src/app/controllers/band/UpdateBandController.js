import UpdateBandService from "../../services/band/UpdateBandService";

export default class UpdateArtistController {
    constructor() { this.service = new UpdateBandService }

    async update(req, res) {
        const { id } = req.params
        const { name, foundation, end } = req.body

        const resulte = await this.service.updateBand(id, name, foundation, end)

        return res.json(resulte)
    }
}