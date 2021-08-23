const Dev = require('../models/Dev');
const parseStringAsArray = require('./utils/parseStringAsArray'); 

module.exports = {
     async index(request, response){
       
       const {latitude, longitude, techs} = request.query;

        arrayTechs = parseStringAsArray(techs)
         console.log(arrayTechs); 

          devs = await Dev.find({
             techs: {
               $in: arrayTechs
             },
             location: {
               $near: {
                 $geometry: {
                    type: 'Point',  
                    coordinates: [longitude, latitude],
                 }, 
                 $maxDistance: 10000,
               },
             },

          });

         return response.json({devs});


     }


};