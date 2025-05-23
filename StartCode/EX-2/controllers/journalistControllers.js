import { articles, journalists } from "../models/data.js";

// GET /journalists - List all journalists
const getAlljournalists = async (req, res) => {
    return res.status(200).json(journalists);
}

// GET /journalists/:id - Get one journalist
const getjournalistById = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) { 
        return res.status(404).json({ error: 'journalist not found' });
    }
    return res.status(200).json(journalist);
}

// POST /journalists - Create new journalist
const createNewjournalists = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newjournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newjournalist);
    return res.status(201).json(newjournalist);
}
// PUT /journalists/:id - Update journalist
const updatejournalists = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) {
        return res.status(404).json({ error: 'journalist not found' });
    }
    if (name) journalist.name = name;
    if (email) journalist.email = email;

    return res.status(200).json(journalist);
}

// DELETE /journalists/:id - Delete journalist
const deletejournalists = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === journalistId);
    if (index === -1) return res.status(404).json({ error: 'journalist not found' });

    journalists.splice(index, 1);
    return res.status(204).send();
}

// GET /journalists/:id/articles — Article by specific journalist
const articleByJournalist = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if(!journalist) {
        res.status(404).json({error: "Journalist Not Found"});
    }
    const filteredAritcle = articles.filter(article => article.journalistId === journalistId);
    return res.status(200).json(filteredAritcle);
}

export { getAlljournalists, getjournalistById, createNewjournalists, updatejournalists, deletejournalists, articleByJournalist};