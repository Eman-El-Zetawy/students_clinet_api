const express = require('express') ; 
const app = express();
const bodyParser = require('body-parser');
const port = 300 ;
 const fs = require('fs');
var arr =[] , item , index ;
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
app.put('/arr/:id', (req, res) => {
    let id=req.params.id;
   
    arr.map((todo, i) => {
        if (todo.id == id) {
        item = todo ;
        index = i ;
        } });
        let  Todo = {
               id: id ,
                first_name: req.body.first_name || item.first_name,
                last_name: req.body.last_name || item.last_name,
                grade: req.body.grade || item.grade,
              };
              arr.splice(index, 1, Todo);
              console.log(arr);
              return res.send(Todo);

   
  });
    app.listen(port);
  
    

  