//(Display file list from folder)

const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
//console.warn(dirpath);

// for(i=0;i<5;i++){

//     fs.writeFileSync(dirpath+'/hello'+i+'txt','it is create five file');
// }


fs.readdir(dirpath,(err,files)=>{
    console.warn(files[3]);
});
