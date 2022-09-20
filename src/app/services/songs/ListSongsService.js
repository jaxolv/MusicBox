import SongModel from "../../models/song/SongModel";

export default class ListSongsService {
    constructor() {}

    async listSongsByAlbum (albumId) {
        try {
            const list = await SongModel.findAll({
                where: { album_id: albumId }
            })

            if (list.length === 0) { return { message: "ID not related to any album." } }

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listAllSongs() {
        try {
            const list = await SongModel.findAll()

            return list
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}