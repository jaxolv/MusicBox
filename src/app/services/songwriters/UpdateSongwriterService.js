import SongwritersModel from "../../models/songwriters/SongwritersModel";

export default class UpdateSongwriterService {
    constructor() { }

    async updateSongwriter(id, song_id, artist_id) {
        try {
            const songwriter = await SongwritersModel.findByPk(id);

            if (!songwriter) { return { message: "Songwriter not found." } };

            const [numberRegisters] = await SongwritersModel.update({ song_id, artist_id }, { where: { id } });

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {id, song_id, artist_id}
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}
