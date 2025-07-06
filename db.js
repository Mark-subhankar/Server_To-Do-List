const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect('mongodb+srv://subhankar:_4FG6ufGNfm3x_X@cluster0.bxtbxar.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
};

module.exports = connectDatabase;
