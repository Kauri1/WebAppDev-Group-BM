/*
const express = require('express');
const pool = require('./database');
const cors = require('cors')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
*/


const express = require('express');
const cors = require('cors');
const { router: authRouter } = require('./auth');
const postsRoutes = require('./posts');
const { createTables } = require('./database');
const { JWT_SECRET } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

createTables();

app.use('/api/auth', authRouter);

app.use('/api', postsRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});