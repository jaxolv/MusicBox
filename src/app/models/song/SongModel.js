import Sequelize, {DataTypes, Model} from "sequelize";
import databaseConfig from "../../../config/database";
import AlbumModel from "../album/AlbumModel";

const sequelize = new Sequelize(databaseConfig);

class SongModel extends Model {};

SongModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        title: DataTypes.STRING,
        subtitle: DataTypes.STRING,
        track: DataTypes.INTEGER,
        album_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: AlbumModel,
                key: "id"
            }
        }
    },
    {
        sequelize,
        modelName: "songs",
        timestamps: false
    }
);

AlbumModel.hasMany(SongModel);

SongModel.belongsTo(AlbumModel, {
    as: "albums",
    foreignKey: "album_id"
})

export default SongModel;
