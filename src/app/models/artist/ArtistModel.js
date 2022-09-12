import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class ArtistModel extends Model {}

ArtistModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        name: DataTypes.STRING,
        born: DataTypes.DATEONLY,
        death: DataTypes.DATEONLY,
        instrument: DataTypes.ENUM({
            values: ['vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other']
        }),
        secondInstrument: DataTypes.ENUM({
            values: ['vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other']
        }),
        otherInstrument: DataTypes.STRING(20),
        songwriter: DataTypes.BOOLEAN,
        producer: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: "artists",
        timestamps: false
    }
)

export default ArtistModel;