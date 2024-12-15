const express = require('express');
const { pool } = require('./database');
const { verifyToken } = require('./auth');
const router = express.Router();

router.post('/posts', verifyToken, async (req, res) => {
  const { title, body } = req.body;
  const userId = req.userId;

  if (!title || !body) {
    return res.status(400).json({ message: 'Title and body are required.' });
  }

  try {
    await pool.query(
      'INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3)',
      [title, body, userId]
    );
    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/posts', verifyToken, async (req, res) => {
  const userId = req.userId;

  try {
    const result = await pool.query('SELECT * FROM posts WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/posts/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const result = await pool.query(
      'SELECT * FROM posts WHERE id = $1 AND user_id = $2',
      [id, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or you are not the owner.' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/posts/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.userId;

  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 AND user_id = $2 RETURNING *', [id, userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or you are not the owner.' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/posts', verifyToken, async (req, res) => {
  try {
    await pool.query('DELETE FROM posts where user_id = $1', [req.userId]);
    res.status(200).json({ message: 'All posts deleted successfully' });
  } catch (error) {
    console.error('Error deleting all posts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
