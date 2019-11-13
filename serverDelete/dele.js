const express = require('express') ; 
const app = express();
const port = 200 ; 
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
app.delete('/arr/:id', (req, res) => {
    let id=req.params.id;
   console.log(id);
    arr.map((todo, index) => {
      if (todo.id == id) {
         arr.splice(index, 1);
         console.log(todo);
         console.log(arr);
         return res.send(arr);
      }
    });
  });
    app.listen(port);
  
    

  