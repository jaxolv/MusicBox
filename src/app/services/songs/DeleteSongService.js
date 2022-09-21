import SongModel from "../../models/song/SongModel";

export default class DeleteSongService {
    constructor() {}

    async eraseSong(id) {
        try {
            const song = await SongModel.findByPk(id);

            if (!song) {
                return { message: "Song not found." };
            }

            await song.destroy();

            return {message: `Song \"${song.title}\" deleted successfully.`}
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
