import CreateArtistService from "../../services/artist/CreateArtistService";

export default class CreateArtistController {
    constructor() { this.service = new CreateArtistService() };

    async create(req, res) {
        const { name,
            born,
            death,
            instrument,
            secondInstrument,
            otherInstrument,
            songwriter,
            producer } = req.body

        const artist = await this.service.newArtist(
            name,
            born,
            death,
            instrument,
            secondInstrument,
            otherInstrument,
            songwriter,
            producer
        )

        return res.json(artist)
    }
}