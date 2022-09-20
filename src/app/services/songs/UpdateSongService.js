import AlbumModel from "../../models/album/AlbumModel";

export default class UpdateArtistService {
    constructor() { }

    async updateAlbum(
        id,
        title,
        release,
        genre,
        band_id
    ) {
        try {
            const titleLC = title.toLowerCase();
            const genreLC = genre.toLowerCase();

            const album = await AlbumModel.findByPk(id);

            if (!album) { return { message: "Album not found." } };

            const [numberRegisters] = await AlbumModel.update(
                {
                    title: titleLC,
                    release,
                    genre: genreLC,
                    band_id
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
                    title,
                    release,
                    genre,
                    band_id
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}