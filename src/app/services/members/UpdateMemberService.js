import MembersModel from "../../models/members/MembersModel";

export default class UpdateMemberService {
    constructor() {}

    async updateMember(
        id,
        stillMember,
        band_id,
        artist_id
    ) {
        try {
            const member = await MembersModel.findByPk(id);

            if (!member) {
                return { message: "Member not found." };
            }

            const [numberRegisters] = await MembersModel.update(
                {
                    stillMember,
                    band_id,
                    artist_id
                },
                {
                    where: { id }
                }
            );

            if (numberRegisters === 0) {
                return { message: "Same data" }
            } else {
                return {
                    id,
                    stillMember,
                    band_id,
                    artist_id
                }
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}