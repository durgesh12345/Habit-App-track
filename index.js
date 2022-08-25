const express = require('express');
const app = express();
const port = 8000;
const path = require('path')
var bodyParser = require('body-parser');
const db = require('./config/moongose');
let Contact = require('./models/mongodb'); 
//let Contact2 = require('./models/mongodb'); 

app.use(express.urlencoded({ extended: true }))

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+ '/assets'));
app.set('views',path.join(__dirname, 'views'));

app.set('view engine', 'ejs'); 
app.set('views', './views');  
// use express router for
app.use('/',require('./routes'));


// home page router
app.get('/',(req,res)=> {
  Contact.find((err,user)=>{
 if(err){
 console.log(err);
 }else{
  return res.render("calender.ejs",{
    // contact_list: contact
});
 }
  })
 
})


// create list for task
 app.get('/create-contact', (req, res) => {
 
    Contact.find({}, function (err, contact) {
      if(err) {
        console.log(err);
       return;
      } 
    
      return res.render("home.ejs",{
        contact_list: contact
    });
    
     });
    
    });

    // task status router
    app.get('/create-contact1', (req, res) => {
      //  app.get('/home', (req, res) => {
        Contact.find({}, function (err, contact) {
          if(err) {
            console.log(err);
           return;
          } 
      
          return res.render("calender.ejs",{
            contact_list: contact
        });
        
         });
        
        }); 

 // task status router        
        app.get('/create-contact12', (req, res) => {
          //  app.get('/home', (req, res) => {
            Contact.find({}, function (err, contact) {
              if(err) {
                console.log(err);
               return;
              } 
          
              return res.render("7daydata.ejs",{
                contact_list: contact
            });
             
             });
            
            });


     // task status router
    app.post('/create-contact', (req, res) => {
    Contact.create({
      list:req.body.list,
      time:req.body.time,  
      time1:req.body.time1, 
     },function(err,newContact) { 
      if (err) {  console.log('error creating contact'); 
      return; }
      console.log(req.body.time1);
      console.log('This is **800',newContact);
     
     return res.redirect('back'); 
     });
    
    }); 
    
     // task status router
    app.post('/create', (req, res) => {
      Contact.create({
        list:req.body.list,
        time:req.body.time,  
        time1:req.body.time1, 
       },function(err,newContact) { 
        if (err) {  console.log('error creating contact'); 
        return; }
        console.log(req.body.time1);
        console.log('**800',newContact);
       
       return res.redirect('back'); 
       });
      
      }); 

      app.post('/create-contact12', (req, res) => {

        Contact.create({
          list:req.body.list,
        
         
         },function(err,newContact) { 
          if (err) {  console.log('error creating contact-data'+err); 
          return; }
          console.log(req.body.list)
          console.log('This is 800',newContact);
          
         
         return res.redirect('back');  
         });
        
        }); 
    
        app.get('/create-contact12', (req, res) => {
          //  app.get('/home', (req, res) => {
            Contact2.find({}, function (err, contact) {
              if(err) {
                console.log(err);
               return;
              } 
          
              return res.render("7daydata.ejs",{
                contact_list: Contact
            });
             
             });
            
            });

// server listen
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error message : ${err}`);
    }
    console.log('Connected to port: ' + port);
})


