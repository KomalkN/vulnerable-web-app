const serialize = require('node-serialize');
app.post('/parse', (req, res) => {
  const data = req.body.data;
  const obj = serialize.unserialize(data);
  res.send(obj);
});
