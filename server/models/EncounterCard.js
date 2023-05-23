const mongoose = require('mongoose');

const encounterCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  world: {
    type: String,
    required: true,
  },
  traits: {
    type: String,
    required: true,
  },
  flavor: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

const EncounterCard = mongoose.model('EncounterCard', encounterCardSchema);

module.exports = EncounterCard;
