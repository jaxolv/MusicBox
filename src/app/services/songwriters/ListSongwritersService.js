import SongwritersModel from "../../models/songwriters/SongwritersModel";
import SongModel from "../../models/song/SongModel";
import ArtistModel from "../../models/artist/ArtistModel";
import BandModel from "../../models/band/BandModel";
import AlbumModel from "../../models/album/AlbumModel";

export default class ListSongwritersService {
    constructor() { }

    async listAllSongwriters() {
        try {
            const list = await SongwritersModel.findAll()

            return list.sort((a, b) => { if (a.song_id > b.song_id) { return 1 } else if (a.song_id < b.song_id) { return -1 } else { return 0 } })
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async listSongwritersOfASong(songId) {
        try {
            const songwriters = await SongwritersModel.findAll({ where: { song_id: songId } })
            const song = await SongModel.findOne({ where: { id: songwriters[0].song_id } })
            const album = await AlbumModel.findOne({ where: { id: song.album_id } })
            const band = await BandModel.findOne({ where: { id: album.band_id } })
            const artists = await ArtistModel.findAll()
            
            let songData = ''
            song.subtitle === null ? songData = `${song.title}` : songData = `${song.title} (${song.subtitle})`;

            return {
                song: songData,
                band: band.name,
                album: `${album.title}, ${album.release.slice(0, 4)}`,
                songwriters: songwriters.map((writer) => {
                    const search = artists.find((artist) => artist.id === writer.artist_id)

                    return { name: search.name, artist_id: search.id }
                })
            }
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
