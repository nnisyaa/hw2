import React, { Component } from "react";
export default class Server extends Component {
    const users = [];
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', function (req, res) {
  users.push(req.body);
  res.json(req.body);
});
app.get('/user', function (req, res) {
 res.json(users);
});
app.listen(3000, () =>
  console.log(`App listening at port 3000`)
);

}