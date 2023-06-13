import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database/mysql/config';
import User from './user';

export interface ISharedFile {
    sharedFileId: number;
    receiver: number;
}
interface ISharedFileInstance extends Model<ISharedFile & {
    id: number;
}, ISharedFile>, ISharedFile {

}
// 휴지통 기능 활용 위해 paranoid: true 옵션 부여
const SharedFile = sequelize.define<ISharedFileInstance>(
    'SharedFile',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sharedFileId: {
            type: DataTypes.INTEGER,
            references: {
                model: File,
                key: 'id'
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        receiverId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        }
    },
    {
        paranoid: true
    }
);

export default SharedFile;