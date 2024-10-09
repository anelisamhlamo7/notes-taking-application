const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const noteRoutes = require('./routes/notes');

// // Connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/notetakingapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(express.json());
// app.use('/notes', noteRoutes);
// app.use("/anelisa",express.static('backend'));
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});
