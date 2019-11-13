const express = require('express');
const app = express();
const port = 4000 ; 
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
app.get( "/arr/:id", (req, res) =>{
     let id=req.params.id;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    let thisId = arr.find(i=>i.id==(id*1));
    console.log(thisId);
    if(thisId == undefined){
        res.send(id);
    }
    res.send(thisId);
    });
    app.listen(port);
  
    

  