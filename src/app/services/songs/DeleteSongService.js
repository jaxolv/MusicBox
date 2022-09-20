import SongModel from "../../models/song/SongModel";

export default class DeleteSongService {
    constructor() {}

    async eraseSong(id) {
        try {
            const song = await SongModel.findByPk(id);

            if (!song) {
                return { message: "Song not found." };
            }

            const erasedSong = await song.destroy();

            return erasedSong
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
