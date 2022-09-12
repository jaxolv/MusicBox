import ListBandsService from "../../services/band/ListBandsService";

export default class ListBandsController {
    constructor() { this.service = new ListBandsService(); }

    async listAll(req, res) {
        const list = await this.service.listBands();

        return res.json(list)
    }
}
