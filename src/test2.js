const mysql = require('mysql');
const connection = mysql.createConnection({ /* config */ });

app.get('/user', (req, res) => {
  const userId = req.query.id;
  connection.query(`SELECT * FROM users WHERE id = '${userId}'`, (err, results) => {
    res.send(results);
  });
});
