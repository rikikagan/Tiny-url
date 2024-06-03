
import express from 'express' 

import cors from "cors"
import bodyParser from "body-parser"; 

import LinksModel from './Models/LinksModel.js';
import UsersModel from './Models/UsersModel.js';
import connectDB from './database.js';

connectDB();
const app = express()
const port = 3000

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/links', LinksModel);
app.use('/user', UsersModel);
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })