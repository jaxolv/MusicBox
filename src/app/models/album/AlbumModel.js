import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";
import BandModel from "../band/BandModel"

const sequelize = new Sequelize(databaseConfig)

class AlbumModel extends Model {}

AlbumModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        title: DataTypes.STRING,
        release: DataTypes.DATEONLY,
        genre: DataTypes.STRING,
        band_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: BandModel,
                key: "id"
            }
        },
    },
    {
        sequelize,
        modelName: "albums",
        timestamps: false
    }
)

BandModel.hasMany(AlbumModel);

AlbumModel.belongsTo(BandModel, {
    as: "bands",
    foreignKey: "band_id"
})

export default AlbumModel;
