import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import testRouter from './routers/test';
const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
    cors({
        origin: [
            "http://localhost:5174`",
        ],
        credentials: true,
    })
);

app.get("/", async (req: Request, res: Response) => {
    return res.send("hd-global-service-be");
});
app.use("/test", testRouter);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});