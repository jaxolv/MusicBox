import { v4 } from "uuid";
import BandModel from "../../models/band/BandModel";

export default class CreateBandService {
    constructor() { }

    async newBand(
        name,
        foundation,
        end
    ) {
        try {
            const nameBand = name.toLowerCase();

            const band = await BandModel.create({
                id: v4(),
                name: nameBand,
                foundation,
                end
            })

            return band
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}