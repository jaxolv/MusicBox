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
            const band = await BandModel.create({
                id: v4(),
                name,
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