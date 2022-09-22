import SongModel from "../../models/song/SongModel"

export default class UpdateSongService {
    constructor() { }

    async updateSong(
        id,
        title,
        subtitle,
        track,
        duration,
        album_id
    ) {
        try {
            const song = await SongModel.findByPk(id);

            if (subtitle) { subtitle = subtitle.toLowerCase() } else { subtitle = undefined };

            if (!song) { return { message: "Song not found." } };

            const [numberRegisters] = await SongModel.update(
                {
                    title: title.toLowerCase(),
                    subtitle,
                    track,
                    duration,
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
                    duration,
                    album_id
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}