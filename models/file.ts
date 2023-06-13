import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/mysql/config';
import User from './user';

export interface IFile {
    name: string;
    size: number;
    path?: string;
    data?: Buffer;
    userId: number;
}
interface IFileInstance extends Model<IFile & {
    id: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}, IFile>, IFile {

}
// 휴지통 기능 활용 위해 paranoid: true 옵션 부여
const File = sequelize.define<IFileInstance>(
    'File',
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
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        path: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.BLOB
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        paranoid: true
    }
);

export default File;