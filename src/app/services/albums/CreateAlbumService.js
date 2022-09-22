import { v4 } from "uuid";
import AlbumModel from "../../models/album/AlbumModel";

export default class CreateAlbumService {
    constructor() { }

    async newAlbum(
        title,
        release,
        genre,
        band_id
    ) {
        try {
            const album = await AlbumModel.create({
                id: v4(),
                title: title.toLowerCase(),
                release,
                genre: genre.toLowerCase(),
                band_id
            })

            return album
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
