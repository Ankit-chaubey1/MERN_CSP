const express = require("express");
const app = express();
const port = 3001;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/',(req,res)=>{
//     res.send('its working fine! now')
// }).listen(3000)

//post
// app.post('/',(req,res)=>{
//     res.send("called post request")
// })

//put
// app.put('/user',(req,res)=>{
//     res.send("called put request")
// })

//delete
// app.delete('/user',(req,res)=>{
//     res.send("called delete request")
// })

//work with real api data

app.use(express.json());
// app.get('/user',(req,res)=>{
//     const userdata={
//         id:1,
//         name:'Ankt',
//         email:'abc@gmail.com'
//     }

//     res.send(userdata);
//         // res.send("get request worked successfully")
// })

// app.get('/name',(req,res)=>{
//     const username={
//         name:"Ankit"
//     }
//     res.send(username)
// })


// app.get('/personaldata',(req,res)=>{
//     const userdata={
//         name:"Ankit",
//         roll:21,
//         depart:"cse"
//     }
//     res.send(userdata)
// })



// app.get('/roll',(req,res)=>{
//     const rollnum={
//         roll:26
//     }
//     res.send(rollnum)
//     //we can directly use  then we dont need to use const rollnum
//     // res.send(req.query.rollnum)
// })
// app.get('/getroll',(req,res)=>{
//     const {roll}=req.query;
//     res.send({roll})

   
// })

//query parama


// Load jokes from JSON file

const fs = require('fs');

app.get("/randomjokes", (req, res) => {
    fs.readFile(__dirname + "/jokes.json", 'utf-8', (err, data) => {
        if (err) {
            
            res.send("Error loading jokes");
        } else {
            const jokes = JSON.parse(data);
            const randomIndex = Math.round(Math.random() * jokes.length);
            res.send(jokes[randomIndex]);
        }
    });
});


// app.get('/abc',(req,res)=>{
// if(fs.existsSync(__dirname+"/Array.json")){
//     fs.readFile(__dirname+"/Array.json",'utf8',(err,data)=>{
//         if(err){
//             console.log;
//         }else{
//             res.json(data);
//         }
//     })
// }else{
//     console.log("file does not exist")
// }
// })

// app.get("/abc", (req, res) => {
//   const filePath = __dirname + "/Array.json";

//   const fs = require("fs");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.send("Error in loading file");
//     } else {
//       res.send(JSON.parse(data));
//     }
//   });
// });

//post request to the same array


// app.post('/user',(req,res)=>{
//     const newuser=req.body;
//     res.json({
// message:'user created successfully',
// userdata:newuser
//     })
// })

// app.put('/user/:id',(req,res)=>{
//     const id=req.params.id;
//     const newdata=req.body;
//     res.json({
//         message:"user updated successfully",
//         userdata:newdata
//     })
// })

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

