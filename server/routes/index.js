const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const EncounterCard = require('../models/EncounterCard');


// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// New route for handling Encounter Card form submission
router.post('/encounter', upload.single('image'), async (req, res) => {
  const { title, world, traits, flavor, rules } = req.body;
  const imagePath = req.file.path;

  try {
    const newCard = new EncounterCard({ title, world, traits, flavor, rules, imagePath });
    await newCard.save();

    res.status(201).json({ message: 'Encounter Card created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating Encounter Card' });
  }
});


router.get('/', (req, res) => {
  res.send('Welcome to The Tomb Chest API');
});

module.exports = router;
