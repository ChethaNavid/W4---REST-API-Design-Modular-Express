import { getAllUsers, getUserById, createNewUsers, updateUsers, deleteUsers} from "../controllers/userControllers.js";
import express from "express";

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createNewUsers);
userRouter.put('/:id', updateUsers);
userRouter.delete('/:id', deleteUsers);

export default userRouter;