import { articles, categories } from "../models/data.js";

const getAllcategories = async (req, res) => {
    return res.status(200).json(categories);
}

const getcategoryById = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.findIndex(c => c.id === categoryId);
    if(!category) {
        return res.status(404).json({error: "category Not Found!"});
    }
    return res.status(200).json(category);
}

const createNewcategory = async (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({error: "Cannot Create New category."});
    }
    const newcategory = {
        id: categories.length + 1,
        name
    }
    categories.push(newcategory);
    return res.status(201).json(newcategory);
}

const updatecategory = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const {name} = req.body;
    const category = categories.findIndex(c => c.id === categoryId);
    if(!category) {
        return res.status(404).json({error: "category Not Found"});
    }
    if(name) {
        category.name = name;
    }

    res.status(200).json(category);
}

const deletecategory = async (req, res) => {
    const categoryId = parseInt(categories.params.id);
    const category = categories.findIndex(c => c.id === categoryId);
    if(index === -1) {
        return res.status(404).json({error: "category Not Found"});
    } 
    categories.splice(index, 1);
    return res.status(204).send();
}

const articleFromCategories = async (req, res) => {
    const categoryId = pasreInt(req.params.id);
    const category = categories.findIndex(c => c.id === categoryId);
    if(!category) {
        res.status(404).json({error: "Category Not Found"});
    }
    const filteredArticle = articles.filter(article => article.categoryId === categoryId);
    res.status(200).json(filteredArticle);
}
export {getAllcategories, getcategoryById, createNewcategory, updatecategory, deletecategory, articleFromCategories};