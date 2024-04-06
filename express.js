const express = require('express');
//const path = require('path');
const app = express();

app.get('',(req,res)=>{
    //console.log('data send by browser ',req.query.name);
    //res.send('Welcome=>'+ req.query.name);
    res.send('<h1>welcome to Home Page</h1>');

});

app.get('/about',(req,res)=>{
    res.send('Welcome the about page');
});


app.get('/contact',(req,res)=>{
    res.send('Welcome the contact page');
});



//const publicpath = path.join(__dirname, 'public');

//app.use(express.static(publicpath));

// app.get('', (_, res) => {
//     res.sendFile(`${publicpath}/index.html`);
// });

// app.get('/about', (_, res) => {
//     res.sendFile(`${publicpath}/about.html`);
// });









app.listen(5500);