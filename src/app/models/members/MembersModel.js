import Sequelize, {DataTypes, Model} from "sequelize";
import databaseConfig from "../../../config/database";
import ArtistModel from "../artist/ArtistModel";
import BandModel from "../band/BandModel";

const sequelize = new Sequelize(databaseConfig);

class MembersModel extends Model {};

MembersModel.init(
    {
        id: {
            type: DataTypes.UUIDV4(),
            primaryKey: true
        },
        stillMember: DataTypes.BOOLEAN,
        band_id: {
            type: DataTypes.UUIDV4(),
            references: {
                model: BandModel,
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
        modelName: "members",
        timestamps: false
    }
);

BandModel.belongsToMany(ArtistModel, {through: MembersModel})
ArtistModel.belongsToMany(BandModel, {through: MembersModel})

MembersModel.belongsTo(BandModel, {
    as: "bands",
    foreignKey: "band_id"
});

MembersModel.belongsTo(ArtistModel, {
    as: "artists",
    foreignKey: "artist_id"
})

export default MembersModel;
