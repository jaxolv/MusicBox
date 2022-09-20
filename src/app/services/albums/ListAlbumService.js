import AlbumModel from "../../models/album/AlbumModel";
import BandModel from "../../models/band/BandModel";

export default class ListArtistsService {
    constructor() { }

    async listAlbumsByBand(bandId) {
        try {
            const list = await AlbumModel.findAll({
                where: { band_id: bandId }
            })

            if (list.length === 0) { return { message: "ID not related to any band." } }

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listAllAlbums(band_name) {
        try {
            const list = await AlbumModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}