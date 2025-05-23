import { getAllArticles, getArticleById, createNewArticle, updateArticle, deleteArticle } from "../controllers/articleControllers.js";
import express from 'express';

const articleRouter = express.Router();

articleRouter.get('/', getAllArticles);
articleRouter.get('/:id', getArticleById);
articleRouter.post('/', createNewArticle);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle);

export default articleRouter;
