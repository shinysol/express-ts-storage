import { Request, Response, Router } from 'express';
// import { userLogin } from '../controllers/user';

const loginRouter = Router();
loginRouter.post('/', async (req: Request, res: Response) => {
    /* to DB */
    // const result = userSignup(req.body)
    // return res.json(result);
    /* Demo */
    return res.json({
        success: true,
        json: {
            userId: 'test1',
            name: '테스트1',
            email: 'test@test.com'
        }
    })
})

export default loginRouter;