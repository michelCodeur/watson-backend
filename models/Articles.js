const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  author:    { type: String, required: true },
  photo_url: { type: String, default: '' },
  content:   { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
