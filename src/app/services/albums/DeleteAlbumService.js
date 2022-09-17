import AlbumModel from "../../models/album/AlbumModel";

export default class DeleteAlbumService {
    constructor() {}

    async eraseAlbum(id) {
        try {
            const album = await AlbumModel.findByPk(id);

            if (!album) {
                return { message: "Album not found." };
            }

            const erasedAlbum = await album.destroy();

            return erasedAlbum
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
