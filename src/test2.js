app.get('/run', (req, res) => {
  const code = req.query.code;
  eval(code); // VERY DANGEROUS
});
