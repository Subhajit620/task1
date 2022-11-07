const fs=require("fs");
let jsonString=fs.readFileSync('task.json');



try{
let jsonObject=JSON.parse(jsonString);
console.log(jsonObject);
}
catch(error){
    

}
