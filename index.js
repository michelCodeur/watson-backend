const express = require('express');
const cors    = require('cors');
require('dotenv').config();
require('./db/connection');

const articlesRouter = require('./controllers/articlesController');
const usersRouter    = require('./controllers/usersController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/articles', articlesRouter);
app.use('/api', usersRouter);

app.get('/', (req, res) => res.json({ status: 'Watson API running' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
