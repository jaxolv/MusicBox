import CreateBandService from "../../services/band/CreateBandService";

export default class CreateBandController {
    constructor() { this.service = new CreateBandService() };

    async create(req, res) {
        const { name, foundation, end } = req.body

        const band = await this.service.newBand(
            name,
            foundation,
            end
        )

        return res.json(band)
    }
}