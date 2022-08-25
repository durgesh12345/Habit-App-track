const mongoose =  require('mongoose'); 

// connect to the databases
mongoose.connect('mongodb://localhost/habitmydevelopment');

const db = mongoose.connection;

// if err then show the error message
db.on('error',function(err){
    console.error.bind(console,'error')
});

// connectb to data databases
db.once('open',function() {
    console.log('Connected to MongoDB Database');
});

// export the database instanceof db instance
module.exports = db;
