import { v4 } from "uuid";
import AlbumModel from "../../models/album/AlbumModel";
import SongModel from "../../models/song/SongModel";

export default class CreateSongService {
    constructor() { }

    async newSong(title, subtitle, track, album_id) {
        try {
            if (subtitle) { subtitle = subtitle.toLowerCase() } else { subtitle = undefined }

            const songs = await SongModel.findAll({ where: { album_id: album_id } });

            const song = await SongModel.create({
                id: v4(),
                title: title.toLowerCase(),
                subtitle,
                track,
                album_id
            })

            const sameTrack = songs.find(music => music.track === track);

            if (sameTrack) {
                song.destroy();
                return { message: "This value for track already exists." };
            };

            const album = await AlbumModel.findAll({ where: { id: song.album_id } });

            return { song: song.title + " (" + song.subtitle + ")", track: song.track, album: album }
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}