import { v4 } from "uuid";
import ArtistModel from "../../models/artist/ArtistModel";

export default class CreateArtistService {
    constructor() { }

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
            const nameLC = name.toLowerCase();

            if (instrument === "other" || otherInstrument) {
                const otherInstrumentLC = otherInstrument.toLowerCase(0);

                return await ArtistModel.create({
                    id: v4(),
                    name: nameLC,
                    born,
                    death,
                    instrument,
                    secondInstrument,
                    otherInstrument: otherInstrumentLC,
                    songwriter,
                    producer
                })
            } else {
                return await ArtistModel.create({
                    id: v4(),
                    name: nameLC,
                    born,
                    death,
                    instrument,
                    secondInstrument,
                    otherInstrument,
                    songwriter,
                    producer
                })
            }
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}