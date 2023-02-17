const mongoose = require('mongoose');

const demoSchema = mongoose.Schema({
    name: {type: String},
    data: {type: String}
})

module.exports = mongoose.model("Demo",demoSchema)