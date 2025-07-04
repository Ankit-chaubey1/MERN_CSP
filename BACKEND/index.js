// console.log("hii")
//to check if a file exists or not
// const fs=require("fs")


// if(fs.existsSync(__dirname+"/index.js")){
//     console.log("file exists");
// }else{
//     console.log("file does not exist");
// }



// if(!fs.existsSync(__dirname+"/Array.json")){
//     fs.writeFileSync(__dirname+'/Array.json',"[]")
// }else{
//     console.log("file already exist u can only overwrite it");
// }

// const arr=JSON.parse(fs.readFileSync(__dirname+"/Array.json","utf-8")
// );
// arr.push(1);
// for(let i=1;i<10;i++){
//     arr.push(i);
// }
// console.log(arr);
// console.log(typeof arr)
// fs.writeFileSync(__dirname+"/Array.json",(arr));
//update a file

// if(fs.existsSync(__dirname+"/Hello.txt")){
   
// fs.writeFileSync(__dirname+'/hello.txt',"apun bhi thik hai")
// console.log("file updated successfully")
// }else{
//     console.log("file already exist u can only overwrite it");
// }


//readfile
// if(fs.existsSync(__dirname+"/hello.txt")){
//     fs.readFile(__dirname+"/hello.txt",'utf8',(err,data)=>{
//         if(err){
//             console.log("error in reading file");
//         }else{
//             console.log(data);
//         }
//     })
// }else{
//     console.log("file does not exist")
// }





//  const fs = require("fs");
// if(!fs.existsSync(__dirname+"/Array.json")){
//     fs.writeFileSync(__dirname+'/Array.json',"[]")
// }else{
//     console.log("file already exist u can only overwrite it");
// }
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// rl.question("Enter your todo: ", (todo) => {
//   arrayBuffer.push({
//     val:arrayBuffer.length,
//     name:todo
//   })
//   fs.writeFileSync(__dirname,"/Array.json",JSON.stringify(arr));
//   rl.close();

// });



const fs = require("fs");
const readline = require("readline");

const filePath = __dirname + "/Array.json";

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]");
} else {
  console.log("file already exist u can only overwrite it");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const printToDo=()=>{
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let arr = JSON.parse(fs.readFileSync(filePath, "utf-8"));
rl.question("choose ur todo operation /, 1.add todo \n 2.view todo \n 3.deletetodo \n 4.updatetodo \n" ,(ans)=>{
    switch(ans){
        case "1":
            rl.question("Enter your todo: ", (todo) => {
  arr.push({
    val: arr.length,
    name: todo
  });
  fs.writeFileSync(filePath, JSON.stringify(arr));
  console.log(arr);

    
});
break;
case "2":
    printToDo();
    break;
case "3":
  rl.question("Enter your todo id to delete: ", (id) => {
   
    

  
    arr = arr.filter(item => item.val !== id);

    fs.writeFileSync(filePath, JSON.stringify(arr));
    console.log(" Updated todos after deletion:", arr);
    
  });
  

  break;

  case "4":
  rl.question("Enter your todo id and its value to update : ", (todo) => {
   
    
rl.question("enter new data",(newtodo)=>{
    arr[todo-1].name=newtodo;
    fs.writeFileSync(__dirname+"Array.json",JSON.stringify(arr));
    console.log(arr);
})
    
  });
  

  break;

    default:
        console.log("invalid command");
        break;

 
}
});




//to create or write into a file

// const http=require("http");
// const fs=require("fs");
// http.createServer((req,res)=>{
//     const message="hello world";
//     fs.writeFile("ab.txt",message,(err)=>{
//         if(err){
//             console.error(err);
//             res.end("some issue with the apge");
//         }else{
//             res.end("data written successsfully ");
//         }
//     })
// }).listen(230);



//to read the file
// const http=require("http");
// const fs=require("fs");
// http.createServer((req,res)=>{
//     // const message="hello world";
//     fs.readFile("ab.txt",(err)=>{
//         if(err){
//             console.error(err);
//             res.end("some issue with the apge");
//         }else{
//             res.end();
//         }
//     })
// }).listen(230);



