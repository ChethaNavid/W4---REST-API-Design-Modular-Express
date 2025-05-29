import { articles } from "../models/data.js";

const getAllArticles = async (req, res) => {
    return res.status(200).json(articles);
}

const getArticleById = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.findIndex(a => a.id === articleId);
    if(!article) {
        return res.status(404).json({error: "Article Not Found!"});
    }
    return res.status(200).json(article);
}

const createNewArticle = async (req, res) => {
    const {title, content, journalistId, categoryId} = req.body;
    if(!title || !content) {
        return res.status(400).json({error: "Title and content are required to create an article."});
    }
    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId: journalistId || null,
        categoryId: categoryId || null
    }
    articles.push(newArticle);
    return res.status(201).json(newArticle);
}

const updateArticle = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const {title, content} = req.body;
    const article = articles.findIndex(a => a.id === articleId);
    if(!article) {
        return res.status(404).json({error: "Article Not Found"});
    }
    if(title) {
        article.title = title;
    }
    if(content) article.content = content;

    res.status(200).json(article);
}

const deleteArticle = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const index = articles.findIndex(a => a.id === articleId);
    if(index === -1) {
        return res.status(404).json({error: "Article Not Found"});
    } 
    articles.splice(index, 1);
    return res.status(204).send();
}

export {getAllArticles, getArticleById, createNewArticle, updateArticle, deleteArticle};