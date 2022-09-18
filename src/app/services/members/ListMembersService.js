import MembersModel from "../../models/members/MembersModel";
import BandModel from "../../models/band/BandModel";
import ArtistModel from "../../models/artist/ArtistModel";

export default class ListMembersService {
    async listMemberByName(band_name) {
        try {
            const band = await BandModel.findOne({ where: { name: band_name.toLowerCase() } });

            if (!band) { return { message: "Band not found." } };

            const artists = await ArtistModel.findAll();

            const members = await MembersModel.findAll({ where: { band_id: band.id } });

            return { band: band.name, members: members };
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
