import ArtistModel from "../../models/artist/ArtistModel";

export default class UpdateArtistService {
    constructor() { }

    async updateArtist(
        id,
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
            const artist = await ArtistModel.findByPk(id);

            if (!artist) {
                return { message: "Artist not found." };
            }

            const [numberRegisters] = await ArtistModel.update(
                {
                    name,
                    born,
                    death,
                    instrument,
                    secondInstrument,
                    otherInstrument,
                    songwriter,
                    producer
                },
                {
                    where: { id }
                }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    id,
                    name,
                    born,
                    death,
                    instrument,
                    secondInstrument,
                    otherInstrument,
                    songwriter,
                    producer
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}