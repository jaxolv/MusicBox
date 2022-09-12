import { v4 } from "uuid";
import MembersModel from "../../models/members/MembersModel";
import ArtistModel from "../../models/artist/ArtistModel"
import BandModel from "../../models/band/BandModel"

export default class CreateMembersService {
    constructor() { }

    async registerMember(
        stillMember,
        band_id,
        artist_id
    ) {
        try {
            const band = BandModel.findByPk(band_id)

            if (!band) {
                return { message: "ID not related to any band."}
            }

            const artist = ArtistModel.findByPk(artist_id)

            if (!artist) {
                return { message: "ID not related to any artist."}
            }

            const member = await MembersModel.create({
                id: v4(),
                stillMember,
                band_id,
                artist_id
            })

            return member
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}