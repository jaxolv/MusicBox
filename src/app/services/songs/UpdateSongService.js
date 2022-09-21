import SongModel from "../../models/song/SongModel"

export default class UpdateSongService {
    constructor() {}

    async updateSong(
        id,
        title,
        subtitle,
        track,
        album_id
    ) {
        try {
            const song = await SongModel.findByPk(id);
            
            if (!subtitle) { subtitle = undefined } else { subtitle = subtitle.toLowerCase() };

            if (!song) { return { message: "Song not found." } };

            const [numberRegisters] = await SongModel.update(
                {
                    title: title.toLowerCase(),
                    subtitle,
                    track,
                    album_id
                },
                {
                    where: { id }
                }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    title,
                    subtitle,
                    track,
                    album_id
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}