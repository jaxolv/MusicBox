import SongModel from "../../models/song/SongModel";
import AlbumModel from "../../models/album/AlbumModel";
import BandModel from "../../models/band/BandModel";
import timeConversor from "../../controllers/utils/timeConversor"

export default class ListSongsService {
    constructor() { }

    async listSongsByAlbum(albumId) {
        try {
            const tracklist = await SongModel.findAll({ where: { album_id: albumId } })

            if (tracklist.length === 0) { return { message: "ID not related to any album." } }

            const albumDuration = (tracklist.map((song) => { return timeConversor(song.duration) })).reduce((A, B) => A + B)

            const album = await AlbumModel.findOne({ where: { id: albumId } })

            const band = await BandModel.findOne({ where: { id: album.band_id } })

            return {
                album: album.title,
                artist: band.name,
                release: album.release,
                tracks: tracklist.length,
                duration: timeConversor(albumDuration),
                tracklist: tracklist.sort((A, B) => A.track - B.track)
            }
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