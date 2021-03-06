const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { auth, users } = require('./routes');


const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/users', users);

mongoose.connect(process.env.DATABASE_URL, () => {
  console.log('connected to database');
  app.listen(3000, () => {
    console.log('server listening on http://127.0.0.1:3000');
  });
});
