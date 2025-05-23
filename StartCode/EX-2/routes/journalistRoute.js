import { getAlljournalists, getjournalistById, createNewjournalists, updatejournalists, deletejournalists, articleByJournalist } from "../controllers/journalistControllers.js";
import express from "express";

const journalistRouter = express.Router();

journalistRouter.get('/', getAlljournalists);
journalistRouter.get('/:id', getjournalistById);
journalistRouter.post('/', createNewjournalists);
journalistRouter.put('/:id', updatejournalists);
journalistRouter.delete('/:id', deletejournalists);
journalistRouter.get('/:id/articles', articleByJournalist);

export default journalistRouter;