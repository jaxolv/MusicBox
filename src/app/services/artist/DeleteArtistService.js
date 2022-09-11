import ArtistModel from "../../models/artist/ArtistModel";

export default class DeleteArtistService {
    constructor() {}

    async eraseArtist(id) {
        try {
            const artist = await ArtistModel.findByPk(id);

            if (!artist) {
                return { message: "Artist not found." };
            }

            const erasedArtist = await artist.destroy();

            return erasedArtist
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}