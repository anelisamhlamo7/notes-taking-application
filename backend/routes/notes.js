const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Route to save a new note
router.post('/', async (req, res) => {
  const { content, userId } = req.body;
  const newNote = new Note({ content, userId });
  await newNote.save();
  res.json({ message: 'Note saved successfully' });
});

// Route to fetch all notes for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const notes = await Note.find({ userId });
  res.json(notes);
});

module.exports = router;
