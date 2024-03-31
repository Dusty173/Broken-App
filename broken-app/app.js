const express = require('express');
const axios = require('axios');
const ExpressError = require("./expressError")
const app = express();


app.post('/', async (req, res, next) => {
  try{
    const baseURL = `https://api.github.com/users/`
    const {developers} = req.body;
    const d = developers;
    const data = {};

    if(!d) throw new ExpressError('No developers found', 404);
    for(let dev of d){
      
      const res = await axios.get(`${baseURL}${dev}`);
      
      data.push({
        name: res.data.name,
        bio: res.date.bio
      })
    }

    return res.json({data});
  
  } catch(err){
    next(err)
  }
});

module.exports = app;