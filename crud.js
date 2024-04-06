const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'crud');
const filepath = `${dirpath}/apple.txt`;

//fs.writeFileSync(filepath,'This is simple crud');
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item);
// });

// fs.appendFile(filepath, 'And file name is apple.txt',(err)=>{

//     if(!err){

//         console.log('This file is updated');
//     }
// });


// fs.rename(filepath, `${dirpath}/fruit.txt`, (err)=>{

//     if (!err) {

//         console.log('This file is rename updated');
//     }

// });


fs.unlinkSync(`${dirpath}/fruit.txt`);