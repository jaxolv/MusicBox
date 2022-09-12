import BandModel from "../../models/band/BandModel";

export default class DeleteBandService {
    constructor() {}

    async eraseBand(id) {
        try {
            const band = await BandModel.findByPk(id);

            if (!band) {
                return { message: "Band not found." };
            }

            const erasedBand = await band.destroy();

            return erasedBand
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}