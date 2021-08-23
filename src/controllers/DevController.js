const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('./utils/parseStringAsArray');

module.exports = {

async index (request, response){
    const devs = await Dev.find();
    
    return response.json(devs);

},


async store (request, response){

    const {github_username, techs, latitude, longitude} = request.body
    
   let dev = await Dev.findOne({github_username})

   if (!dev){
     const techsArray = parseStringAsArray(techs);
  
     const Apiresponse = await axios.get(`https://api.github.com/users/${github_username}`)
  
     const {name = login, avatar_url, bio} = Apiresponse.data
  
     const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
  
    };
  
       dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location,
      });
  
     console.log(name, bio, avatar_url, github_username)
  
        
   }

     return response.json(dev);
  
  }

};