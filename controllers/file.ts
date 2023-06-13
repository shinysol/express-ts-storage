import { Op } from "sequelize";
import File, { IFile } from "../models/file";
import SharedFile from "../models/sharedFile";
export const getMyFiles = async (id: number) => {
    try {
        // owner가 현재 유저인 파일들만 조회
        // const result = await File.findAll({
        //     where: { userId: id }
        // })
        // return {
        //     success: !!result,
        //     json: result
        // }

        /* dummy */
        return {
            success: true,
            json: [
                {
                    type: "file",
                    name: "내파일1.pdf",
                    createdAt: new Date(2023, 0, 19, 15, 12),
                    size: 423113,
                },
                {
                    type: "file",
                    name: "내파일2.pdf",
                    createdAt: new Date(2023, 0, 19, 14, 11),
                    size: 80251,
                },
                {
                    type: "file",
                    name: "내파일3.pdf",
                    createdAt: new Date(2023, 0, 20, 9, 12),
                    size: 125122,
                },
                {
                    type: "folder",
                    name: "FOLDER2",
                },
                {
                    type: "folder",
                    name: "FOLDER3",
                },
                {
                    type: "file",
                    name: "파일명.doc",
                    createdAt: new Date(2023, 0, 20, 15),
                    size: 15622,
                },
            ]
        }
    } catch (err) {
        return {
            success: false,
            reason: err
        }
    }
}
export const getMyTrashFiles = async (id: number) => {
    try {
        // deletedAt에 타임 스탬프 찍혀있는 파일들만 조회
        // const result: IFile[] = await File.findAll({
        //     where: {
        //         id,
        //         deletedAt: { [Op.ne]: null }
        //     }
        // })
        // return {
        //     success: !!result,
        //     json: result
        // }

        /* dummy */
        return {
            success: true,
            json: [
                {
                    type: "file",
                    name: "휴지통1.pdf",
                    createdAt: new Date(2023, 0, 19, 15, 12),
                    size: 23113,
                },
                {
                    type: "file",
                    name: "휴지통2.pdf",
                    createdAt: new Date(2023, 0, 19, 14, 11),
                    size: 65251,
                },
                {
                    type: "file",
                    name: "휴지통3.pdf",
                    createdAt: new Date(2023, 0, 20, 9, 12),
                    size: 111252,
                },
            ]
        }
    } catch (err) {
        return {
            success: false,
            reason: err
        }
    }
}
export const getMySharedFiles = async (id: number) => {
    try {
        // SharedFile model의 receiverId 컬럼에 유저의 id가 존재하는 파일들만 조회
        // const result: IFile[] = await File.findAll({
        //     include: [{
        //         model: SharedFile,
        //         where: {
        //             receiverId: id
        //         }
        //     }],
        // })
        // return {
        //     success: !!result,
        //     json: result
        // }
        /* dummy */
        return {
            success: true,
            json: [
                {
                    type: "file",
                    name: "공유1.pdf",
                    createdAt: new Date(2023, 0, 19, 15, 12),
                    size: 23113,
                },
                {
                    type: "file",
                    name: "공유2.pdf",
                    createdAt: new Date(2023, 0, 19, 14, 11),
                    size: 65251,
                },
                {
                    type: "file",
                    name: "공유3.pdf",
                    createdAt: new Date(2023, 0, 20, 9, 12),
                    size: 111252,
                },
            ]
        }
    } catch (err) {
        return {
            success: false,
            reason: err
        }
    }
}
export const uploadFile = async (data: IFile) => {
    try {
        const result = await File.create(data);
        return {
            success: true,
            count: result
        }
    } catch (err) {
        return {
            success: false,
            reason: err
        }
    }
}