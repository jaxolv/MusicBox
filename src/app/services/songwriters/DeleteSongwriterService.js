import SongwritersModel from "../../models/songwriters/SongwritersModel";

export default class DeleteSongwriterService {
    constructor() {}

    async eraseSongwriter(id) {
        try {
            const songwriter = await SongwritersModel.findByPk(id);

            if (!songwriter) {
                return { message: "Songwriter not found." };
            }

            const erasedSongwriter = await songwriter.destroy();

            return erasedSongwriter
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
