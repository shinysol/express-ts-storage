import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/mysql/config';

export interface IUser {
    userId: string;
    name: string;
    email: string;
    password: string;
}
interface IUserInstance extends Model<IUser & {
    id: number;
}, IUser>, IUser {

}
const User = sequelize.define<IUserInstance>(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {

    }
);

export default User;