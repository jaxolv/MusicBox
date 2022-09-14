import UpdateArtistService from "../../services/artist/UpdateArtistService";

export default class UpdateArtistController {
    constructor() { this.service = new UpdateArtistService() }

    async update(req, res) {
        const { id } = req.params
        const {
            name,
            born,
            death,
            instrument,
            secondInstrument,
            otherInstrument,
            songwriter,
            producer
        } = req.body

        const resulte = await this.service.updateArtist(
            id,
            name,
            born,
            death,
            instrument,
            secondInstrument,
            otherInstrument,
            songwriter,
            producer
        )

        return res.status(200).json(resulte)
    }
}