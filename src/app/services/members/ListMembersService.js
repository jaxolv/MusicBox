import MembersModel from "../../models/members/MembersModel";
import BandModel from "../../models/band/BandModel";
import ArtistModel from "../../models/artist/ArtistModel";

export default class ListMembersService {
    async listMemberByName(band_name) {
        try {
            const band = await BandModel.findOne({ where: { name: band_name } });

            if (!band) { return { message: "Band not found." } };

            // const artists = await ArtistModel.findAll();

            const members = await MembersModel.findAll({ where: { band_id: band.id } });

            const activeMembers = members.filter((member) => member.stillMember === true)
            const formalMembers = members.filter((member) => member.stillMember === false)

            return {
                band: band.name,
                length: members.length,
                active_members: activeMembers,
                formal_members: formalMembers
            };
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async ListAll() {
        try {
            const members = await MembersModel.findAll()

            return members
        } catch (err) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
