import MembersModel from "../../models/members/MembersModel";

export default class DeleteArtistService {
    constructor() {}

    async eraseMember(id) {
        try {
            const member = await MembersModel.findByPk(id);

            if (!member) {
                return { message: "Member not found." };
            }

            const erasedMember = await member.destroy();

            return erasedMember
        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}