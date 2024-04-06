const dbconnect = require('./mongodb');

const insert =async ()=>{
    const db = await dbconnect();
    const result = db.insert(
        [
            { name: 'node 5', brand:'oppo', price:25000, category:'mobile'},
            { name: 'mi', brand:'redmi', price:15000, category:'mobile'}
        ]
    )
}

insert();
