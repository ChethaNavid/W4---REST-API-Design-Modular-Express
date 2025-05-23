import { getAllcategories, getcategoryById, createNewcategory, updatecategory, deletecategory, articleFromCategories } from "../controllers/categorieControllers.js";
import express from "express";

const categoriesRouter = express.Router();

categoriesRouter.get('/', getAllcategories);
categoriesRouter.get('/:id', getcategoryById);
categoriesRouter.post('/', createNewcategory);
categoriesRouter.put('/:id', updatecategory);
categoriesRouter.delete('/:id', deletecategory);
categoriesRouter.get('/:id/articles', articleFromCategories);

export default categoriesRouter;