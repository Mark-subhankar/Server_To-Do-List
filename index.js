const express = require('express');
const connectDatabase = require('./db');

connectDatabase();

const app = express();
const port = 3000;

app.use(express.json()); // must be before routes


app.use('/api/user', require('./routes/userRoute'));
// app.use('/api/note', require('./routes/noteRoute'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});