var mysql = require('mysql');
let express = require('express');
var app = express();
cors = require('cors');

const port = process.env.PORT || 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amber1xs",
  database: "clicksource"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors());

app.set('port', port); // set express to use this port

app.get('/form/:id', getForm);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

function getForm (req, res)  {
  let query = "SELECT form FROM `forms` where id=" + req.params.id;

  // execute query
  con.query(query, (err, result) => {
      if (err) {
          res.redirect('/');
      } else {
        console.log(result[0].form);
          res.send(result[0].form);
      }
  });
}

// con.query('INSERT INTO contacts SET ?', ["name 001","name001@email.com"], (err, res) => {
//   if(err) throw err;
// });