import BandModel from "../../models/band/BandModel";

export default class UpdateArtistService {
    constructor() {}

    async updateBand(id, name, foundation, end) {
        try {
            const band = await BandModel.findByPk(id);

            if (!band) {
                return { message: "Band not found." };
            }

            const [numberRegisters] = await BandModel.update(
                { name, foundation, end }, { where: { id } }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return { id, name, foundation, end }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}