const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send(
    `<h1>Привет, ${req.query.name ? req.query.name : 'посетитель'}!<br />${
      req.query.message ? req.query.message : 'Введи сообщение.'
    }</h1>`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}.`);
});
