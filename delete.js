const dbconnect = require('./mongodb');

const deletedata= async ()=>{

    let data = await dbconnect();
    let result = await data.deleteMany({name:"mi"});
    console.warn(result);

    if(result.acknowledged){
        console.log('record id deleted');
    }
}

deletedata();