const express = require('express');
const app = express();

app.get('/log', (req, res) => {
  const userInput = req.query.message;
  console.log("User log: " + userInput);  // ⚠️ Warning: possible log injection
  res.send("Logged your input");
});

app.listen(3000, () => console.log('Server running on port 3000'));
