import express from 'express';
import cors from 'cors';
import articleRouter from './routes/articleRoute.js';
import journalistRouter from './routes/journalistRoute.js';
import categoriesRouter from './routes/categoriesRoute.js';

const app = express();
app.use(express.json());
const PORT = 5000;

app.use(cors()); 

app.use('/articles', articleRouter);
app.use('/journalists', journalistRouter);
app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});