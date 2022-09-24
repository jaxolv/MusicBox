import { v4 } from "uuid";
import SongwritersModel from "../../models/songwriters/SongwritersModel";

export default class CreateSongwriterService {
    constructor() {}

    async newSongwriter(song_id, artist_id) {
        try {
            const songwriter = await SongwritersModel.create({id: v4(), song_id, artist_id})

            return songwriter
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
