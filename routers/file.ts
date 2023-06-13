import { Request, Response, Router } from "express";
import multer from 'multer';
import fs from 'fs';
import { getMyFiles, getMySharedFiles, getMyTrashFiles, uploadFile } from "../controllers/file";
const upload = multer({ dest: 'uploads/' });

const fileRouter = Router();
const myId = 1;
fileRouter.get('/my', async (req: Request, res: Response) => {
    // current user의 id로 파일의 owner 컬럼 조회
    return res.json(await getMyFiles(myId));
});
fileRouter.get('/trash', async (req: Request, res: Response) => {
    // current user의 id로 파일의 owner 컬럼 조회
    return res.json(await getMyTrashFiles(myId));
});
fileRouter.get('/shared', async (req: Request, res: Response) => {
    // current user의 id로 파일의 owner 컬럼 조회
    return res.json(await getMySharedFiles(myId));
});
fileRouter.post('/:owner/:path', upload.single('file'), async (req: Request, res: Response) => {
    const { path, originalname, size } = req.file!;
    try {
        const result = await uploadFile({
            name: originalname,
            size,
            data: fs.readFileSync(path),
            userId: Number(req.params.owner),
            path: req.params.path,
        })
        // File saved successfully
        res.json(result);
    } catch (error) {
        // Handle error
        res.sendStatus(500);
    }
});
export default fileRouter;