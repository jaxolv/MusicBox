import SongModel from "../../models/song/SongModel"

export default class UpdateDurationSongService {
    constructor() {}

    async updateDuration(id, duration) {
        try {
            const song = await SongModel.findByPk(id);

            if (!song) { return { message: "Song not found." } };

            const [numberRegisters] = await SongModel.update(
                { duration }, { where: { id } }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    id: song.id,
                    song: song.title + " (" + song.subtitle + ")",
                    duration: duration,
                    albumId: song.album_id
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}
