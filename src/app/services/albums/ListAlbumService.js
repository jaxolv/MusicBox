import AlbumModel from "../../models/album/AlbumModel";
import SongModel from "../../models/song/SongModel";

export default class ListArtistsService {
    constructor() { }

    async listAlbumsByBand(bandId) {
        try {
            const list = await AlbumModel.findAll({
                where: { band_id: bandId }
            })

            if (list.length === 0) { return { message: "ID not related to any band." } }

            return list.sort((a, b) => { if (a.release > b.release) { return 1 } else if (a.release < b.release) { return -1 } else { return 0 } })
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listAllAlbums() {
        try {
            const list = await AlbumModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}