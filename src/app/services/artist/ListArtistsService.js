import ArtistModel from "../../models/artist/ArtistModel";

export default class ListArtistsService {
    constructor() {}

    async listArtists() {
        try {
            const list = await ArtistModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}