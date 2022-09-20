import { v4 } from "uuid";
import SongModel from "../../models/song/SongModel";

export default class CreateSongService {
    constructor() { }

    async newSong(
        title,
        subtitle,
        track,
        album_id
    ) {
        try {
            const titleLC = title.toLowerCase();
            const subtitleLC = subtitle.toLowerCase();

            const song = await SongModel.create({
                id: v4(),
                title: titleLC,
                subtitle: subtitleLC,
                track,
                album_id
            })

            return song
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
