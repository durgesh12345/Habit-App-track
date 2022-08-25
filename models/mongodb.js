const mongoose = require('mongoose');


// create a new Mongoose instance or schema 
const contactSchame = new  mongoose.Schema({
    list: { type: String, 
     required: true
    },
time:{
    type: Number,
    required    : true,
   
},
time1:{
    type: String,
    required : true,
   
}, 

} )





const Contact = mongoose.model('Contact', contactSchame);
// export schma using Contact name

module.exports = Contact;




 

