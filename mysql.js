const mysql = require('mysql');
const con =mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password:  '',
    database: 'shopping_cart'

});

con.connect((err)=>{
    if(err){
        console.warn('errore');
    }else{
        //console.warn('connect');
    }
});


module.exports = con;

// con.query("select * from user",(err, result)=>{

//     console.warn("result", result);
// });
