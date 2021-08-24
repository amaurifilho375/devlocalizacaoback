const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema')

const devSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    techs: [String],
    avatar_url: String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    }


});

module.exports = mongoose.model('Dev', devSchema);