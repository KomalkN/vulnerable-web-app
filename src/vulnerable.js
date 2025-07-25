const serialize = require('node-serialize');
app.post('/parse', (req, res) => {
  const data = req.body.data;
  const obj = serialize.unserialize(data);
  res.send(obj);
});


app.get('/run', (req, res) => {
  const code = req.query.code;
  eval(code); // VERY DANGEROUS
});
