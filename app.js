const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const noteRoutes = require('./backend/models/notes');
const path = require('path');

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
