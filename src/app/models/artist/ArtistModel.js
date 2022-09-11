import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class ArtistModel extends Model {}

ArtistModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true
        },
        name: Sequelize.STRING,
        born: Sequelize.DATEONLY,
        death: Sequelize.DATEONLY,
        instrument: Sequelize.ENUM({
            values: ['vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other']
        }),
        secondInstrument: Sequelize.ENUM({
            values: ['vocal', 'guitar', 'bass', 'drums', 'keyboard', 'percussion', 'other']
        }),
        otherInstrument: Sequelize.STRING(20),
        songwriter: Sequelize.BOOLEAN,
        producer: Sequelize.BOOLEAN
    },
    {
        sequelize,
        modelName: "artists",
        timestamps: false
    }
)

export default ArtistModel;