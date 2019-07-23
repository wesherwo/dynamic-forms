var mysql = require('mysql');
let express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

const port = process.env.PORT || 3000;

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amber1xs",
  database: "clicksource"
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port); // set express to use this port

app.get('/form/:id', getForm);
app.post('/login', login);
app.post('/adduser', addUser);
app.post('/updateuser', updateUser);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

function getForm(req, res) {
  console.log("form/" + req.params.id);
  let query = "SELECT form FROM `forms` where id=" + req.params.id;

  // execute query
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      res.send(result[0].form);
    }
  });
};

function login(req, res) {
  console.log("login");
  let username = req.body.username;
  let password = req.body.password;
  let query = "SELECT * FROM users WHERE username = '" + username + "' AND password= '" + password + "'";

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length == 0) {
      message = 'Username or Password incorrect';
    } else {
      let query = "SELECT * FROM users WHERE username = '" + username + "'";
      db.query(query, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(JSON.stringify(result[0]));
      });
    }
  });
};

function addUser(req, res) {
  console.log("adduser");
  let username = req.body.username;
  let usernameQuery = "SELECT * FROM users WHERE username = '" + username + "'";

  db.query(usernameQuery, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      return res.send('{"text":"Username already exists"}');
    } else {
      let userDetails = Object.entries(req.body);
      let query = "INSERT INTO users (";
      for (var i = 0; i < userDetails.length; i++) {
        query += userDetails[i][0];
        if (i < userDetails.length - 1) {
          query += ", ";
        }
      }
      query += ") VALUES (";
      for (var i = 0; i < userDetails.length; i++) {
        query += "'" + userDetails[i][1] + "'";
        if (i < userDetails.length - 1) {
          query += ", ";
        }
      }
      query += ")";
      db.query(query, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send('{"text":"success"}');
      });
    }
  });
};

function updateUser(req, res) {
  console.log("updateuser");
  let userDetails = Object.entries(req.body.userdetails);
  let query = "UPDATE users SET";
  for (var i = 0; i < userDetails.length; i++) {
    query += " " + userDetails[i][0] + "='" + userDetails[i][1] + "'";
    if (i < userDetails.length - 1) {
      query += ",";
    }
  }
  query += " WHERE id='" + req.body.id + "'";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
};