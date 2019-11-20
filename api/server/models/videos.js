var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videosSchema = mongoose.Schema({
    //informacoes do upload do video
    created: {
        type: Date,
        default: Date.now
    },
    //nome que o usuario escolhe pro video
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    //nome original do video
    videoName: {
        type: String
    },
    //usuario que subiu o video
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Videos', videosSchema);
