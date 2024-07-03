import { Router } from "express";
import { userData } from "../controllers/user.controller.js";

const userRouter = Router();

// router.route('/login').post(userLoginValidator(), errorValidator, loginUser);
userRouter.route('/data').get(userData);

export default userRouter;