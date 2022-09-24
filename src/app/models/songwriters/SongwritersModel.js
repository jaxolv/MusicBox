import Sequelize, {DataTypes, Model} from "sequelize";
import databaseConfig from "../../../config/database";
import ArtistModel from "../artist/ArtistModel";
import SongModel from "../song/SongModel";

const sequelize = new Sequelize(databaseConfig);

class SongwritersModel extends Model {};

SongwritersModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        song_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: SongModel,
                key: "id"
            }
        },
        artist_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: ArtistModel,
                key: "id"
            }
        }
    },
    {
        sequelize,
        modelName: "songwriters",
        timestamps: false
    }
);

SongModel.belongsToMany(ArtistModel, {through: SongwritersModel})
ArtistModel.belongsToMany(SongModel, {through: SongwritersModel})

SongwritersModel.belongsTo(SongModel, {
    as: "songs",
    foreignKey: "song_id"
});

SongwritersModel.belongsTo(ArtistModel, {
    as: "artists",
    foreignKey: "artist_id"
})

export default SongwritersModel;
