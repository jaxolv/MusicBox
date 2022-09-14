import { v4 } from "uuid";
import ArtistModel from "../../models/artist/ArtistModel";

export default class CreateArtistService {
    constructor() {}

    async newArtist(
        name,
        born,
        death,
        instrument,
        secondInstrument,
        otherInstrument,
        songwriter,
        producer
    ) {
        try {
            const nameArtist = name.toLowerCase();
            const otherInstrumentArtist = otherInstrument.toLowerCase();

            const artist = await ArtistModel.create({
                id: v4(),
                name: nameArtist,
                born,
                death,
                instrument,
                secondInstrument,
                otherInstrument: otherInstrumentArtist,
                songwriter,
                producer
            })

            return artist
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}