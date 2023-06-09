import { Request, Response, Router } from "express";

const testRouter = Router();
testRouter.get("/", async (req: Request, res: Response) => {
    return res.send("test router!")
})
export default testRouter;