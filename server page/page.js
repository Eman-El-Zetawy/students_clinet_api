const express = require('express');
const app = express();
const port = 4000 ; 
let pagesize=5;
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
app.get( "/arr", (req, res) =>{
      let page=req.query.page;
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
  start=(page-1)*pagesize;
    end=start+ pagesize;
    res.send(arr.slice(start,end));
   });
   app.listen(port);