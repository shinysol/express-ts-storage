import User, { IUser } from "../models/user";
interface ILogin {
    id: string,
    password: string
}
/** 프로덕션에서는 password hashing 필수 */
export const userLogin = async (login: ILogin) => {
    try {
        const userResult = await User.findAll({
            where: {
                id: login.id,
                password: login.password
            }
        });
        if (userResult) {
            return {
                success: true,
                json: userResult
            }
        } else {
            return {
                success: false,
                reason: "user not found",
            }
        }
    } catch (err) {
        console.error(err);
        return {
            success: false,
            reason: err
        }
    }
}
const userSignUp = async (signin: IUser) => {
    try {
        await User.create(signin)
    } catch (err) {
        console.error(err);
        return {
            success: false,
            reason: err
        }
    }
}