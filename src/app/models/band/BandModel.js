import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class BandModel extends Model { }

BandModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true,
        },
        name: DataTypes.INTEGER,
        foundation: DataTypes.INTEGER,
        end: DataTypes.STRING
    },
    {
        sequelize,
        modelName: "bands",
        timestamps: false
    }
);

export default BandModel;