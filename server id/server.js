const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 ; 

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

// app.get( "/arr", (req, res) =>{
//       let page=req.query.page;
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "*");
//   start=(page-1)*pagesize;
//     end=start+ pagesize;
//     res.send(arr.slice(start,end));
//    });

// app.get( "/arr/:id", (req, res) =>{
//      let id=req.params.id;
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     let thisId = arr.find(i=>i.id==(id*1));
//     console.log(thisId);
//     if(thisId == undefined){
//         res.send(id);
//     }
//     res.send(thisId);
//     });

    
    //app.use(bodyParser.json());
    // app.use((req, res)=>{
    //     let f=req.body.first_name , l=req.body.last_name, g=req.body.gender ;
    //    console.log(f , l , g );
    // })
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.post( "/arr", (req, res) =>{
      
    //    let f=req.body.first_name , l=req.body.last_name, g=req.body.gender ;
    //    console.log(f , l , g );
    //     // if(!req.body.first_name) {
    //     //     return res.status(400).send({
    //     //       success: 'false',
    //     //       message: 'first name  is required'
    //     //     });
    //     //   } else if(!req.body.last_name) {
    //     //     return res.status(400).send({
    //     //       success: 'false',
    //     //       message: 'last name is required'
    //     //     });
    //     //   }else if(!req.body.gender) {
    //     //     return res.status(400).send({
    //     //       success: 'false',
    //     //       message: 'gender is required'
    //     //     });
    //     // }
    //   res.header("Access-Control-Allow-Origin", "*");
    //    res.header("Access-Control-Allow-Headers", "*");
    //     let todo = {
    //              id: arr.length + 1,
    //              first_name: req.body.first_name,
    //              last_name: req.body.last_name ,
    //              gender: req.body.gender 
    //            }
    //            console.log(todo);
    //            arr.push(todo);
    //            console.log(arr);
    //            return res.status(201).send(todo);  
            
    //         });

app.delete('/arr/:id', (req, res) => {
    //const id = parseInt(req.params.id, 10);
    let id=req.params.id;
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "*");

   console.log(id);
    arr.map((todo, index) => {
      if (todo.id === id) {
         arr.splice(index, 1);
         return res.status(200).send({arr
        //    success: 'true',
        //    message: 'Todo deleted successfuly',
         });
      }
    });
      return res.status(404).send({
        success: 'false',
        message: 'todo not found',
      });
  });

 

    app.listen(port);
  
    

  