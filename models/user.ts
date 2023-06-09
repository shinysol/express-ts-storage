import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/mysql/config';

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}
interface IUserInstance extends Model<IUser & {}, IUser>, IUser {

}
const User = sequelize.define<IUserInstance>(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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