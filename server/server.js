import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/app';
import template from './ssr-template';
import ssr from './ssr-handler';
import data from '../public/data.json'

const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

// app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.static(path.resolve(__dirname, '../public')));

// hide powered by express
app.disable('x-powered-by');

app.listen(PORT,  () => console.log("Example app listening on port 3000!"));


let initialState = {
    isFetching: false,
    apps: data
}
  
// Pure client side rendered page
// have to run npm start-csr (client side rendering) to build a real-time page. (for debug purpose only)
app.get('/client', (req, res) => {
    let response = template('Client Side Rendered page')
    res.setHeader('Cache-Control', 'public, max-age=604800')
    // console.log(response)
    res.send(response)
});

// server rendered home page
app.get('/', (req, res) => {
    const { preloadedState, content}  = ssr(initialState)
    const response = template("Server Rendered Page", preloadedState, content)
    // console.log(response)
    res.setHeader('Cache-Control', 'public, max-age=604800')
    res.send(response);
});
