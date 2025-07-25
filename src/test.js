const express = require('express');
const bodyParser = require('body-parser');
const serialize = require('node-serialize');
const app = express();

app.use(bodyParser.json());

app.post('/parse', (req, res) => {
  const data = req.body.data;
  const obj = serialize.unserialize(data);  // 🔥 Critical
  res.send(obj);
});

app.get('/run', (req, res) => {
  const code = req.query.code;
  eval(code);  // 🔥 Critical
  res.send("Executed");
});

app.listen(3000, () => console.log("Listening on port 3000"));
