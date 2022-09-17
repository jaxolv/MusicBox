import AlbumModel from "../../models/album/AlbumModel";
import BandModel from "../../models/band/BandModel";

export default class ListArtistsService {
    constructor() { }

    async listAlbumsByBand(bandId) {
        try {
            const list = await AlbumModel.findAll({
                where: { band_id: bandId }
            })

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listAlbumsByNameOfTheBand(band_name) {
        try {
            const band = await BandModel.findAll({
                where: { name: band_name.toLowerCase() }
            })

            const list = await AlbumModel.findAll({
                where: { id: band.id }
            })

            return { band: band.name, albums: list }
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}