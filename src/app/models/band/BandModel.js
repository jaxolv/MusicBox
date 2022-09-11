import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class BandModel extends Model { }

BandModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true,
        },
        name: Sequelize.STRING(40),
        foundation: Sequelize.STRING(4),
        end: Sequelize.STRING(4)
    },
    {
        sequelize,
        modelName: "band",
        timestamps: true
    }
);

export default BandModel;