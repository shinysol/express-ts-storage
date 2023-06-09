import User from "../models/user";
interface ILogin {
    id: string,
    password: string
}
interface ISignIn extends ILogin {
    name: string,
    email: string,
}
const userLogin = async (login: ILogin) => {
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
const userSignIn = async (signin: ISignIn) => {
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