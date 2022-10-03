import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class UsersModel extends Model {}

UsersModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        born: DataTypes.DATEONLY,
        country: DataTypes.STRING,
        zipCode: DataTypes.STRING,
        verifyed: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: "users",
        timestamps: true
    }
)

export default UsersModel;