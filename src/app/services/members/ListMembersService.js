import MembersModel from "../../models/members/MembersModel";
import BandModel from "../../models/band/BandModel";

export default class ListMembersService {
    async listMemberByName(band_name) {
        try {
            const band = await BandModel.findOne({
                where: { name: band_name.toLowerCase() }
            })

            const members = await MembersModel.findAll({
                where: { band_id: band.id }
            })

                return members
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
