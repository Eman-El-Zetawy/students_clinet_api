const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000 ; 
 const fs = require('fs');
var arr =[];
var file = 'students.json';
fs.readFile(file , 'utf-8' , (err, data )=>{
    if(err){
        console.log(err.message);
    }
    else{
        arr = JSON.parse(data);
        console.log(arr);
    }
});
    app.use(bodyParser.json());
    app.post( "/arr", (req, res) =>{
        let todo = {
                 id: arr.length + 1,
                 first_name: req.body.first_name,
                 last_name: req.body.last_name ,
                 gender: req.body.gender 
               }
               console.log(todo);
               arr.push(todo);
               console.log(arr);
               return res.status(201).send(todo);  
            
            });

    app.listen(port);
  
    

  