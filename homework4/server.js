const express = require('express');
const cors = require('cors');
const { router: authRouter } = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const { createTables } = require('./database');

const app = express();

app.use(cors());
app.use(express.json());

createTables();

app.use('/api/auth', authRouter);

app.use('/api', postsRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
