import ListSongwritersService from "../../services/songwriters/ListSongwritersService";

export default class ListSongwritersController {
    constructor() { this.service = new ListSongwritersService(); }

    async listAll(req, res) {
        const resulte = await this.service.listAllSongwriters();

        return res.json(resulte)
    }

    async listFromSong(req, res) {
        const {id} = req.params

        const resulte = await this.service.listSongwritersOfASong(id);

        return res.json(resulte)
    }
}
