import BandModel from "../../models/band/BandModel";

export default class ListBandsService {
    constructor() {}

    async listBands() {
        try {
            const list = await BandModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}