const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;


// fs.writeFileSync(filePath,'This is write file');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);


// fs.appendFile(filePath,'this is updated file.apple.txt',(err)=>{

//     if(!err) console.log('file is updated');
// });

fs.rename(filePath,`${dirPath}/fruite.txt`,(err)=>{

    console.log('file have rename');
});

