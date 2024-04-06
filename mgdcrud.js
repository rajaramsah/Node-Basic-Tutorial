

// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data[0]);
//     });
// });

//Fetch  Mongodb data;

// const dbconnect = require('./mongodb');


// const main =async ()=>{
//     let data = await dbconnect();
//     data = await data.find().toArray();
//     console.warn(data[0]); 
// }

// main();

//console.warn(dbconnect());



//CRUD IN MONGOOSE

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/e-comm");
// const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String

// });

// const saveInDb = async () => {
//     const product = mongoose.model('product', ProductSchema);
//     let data = new product(
//         {
//             name: "nokia6",
//             price: 12000,
//             brand: "nokia",
//             category: "mobile"
//         });
//     let result = await data.save();
//     console.log(result);
// }

// const updateInDb = async () => {
//     const product = mongoose.model('product', ProductSchema);
//     let data = await product.updateOne(
//         { name: "nokia6" },
//         {
//             $set: { name: "oppo" }
//         }
//     );

//     console.log(data);

// }


// const deleteInDB = async () => {
//     const product = mongoose.model('product', ProductSchema);
//     let data = await product.deleteOne({ name: 'oppo' });
//     console.log(data);
// }


// const findInDB = async () => {
//     const product = mongoose.model('product', ProductSchema);
//     let data = await product.find();
//     console.log(data[0]);
// }


// findInDB();



// const express = require('express');
// const res = require('express/lib/response');
// require('./config');

// const product = require('./product');

// const app = express();

// app.use(express.json());


// app.post('/create', async (req, res) => {
//     let data = new product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);

// });

// app.get('/list', async (req, res) => {

//     let data = await product.find();
//     res.send(data);
// })


// app.delete('/delete/:_id', async (req, res) => {
//     console.log(req.params)
//     let data = await product.deleteOne(req.params);
//     res.send(data);
// });


// app.put('/update/:_id', async (req, res) => {
//     console.log(req.params)
//     let data = await product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }

//     );
//     res.send(data);
// });


// app.get("/search/:key", async(req,res)=>{
//     console.log(req.params.key)
//     let data = await product.find(
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"brand":{$regex:req.params.key}},
//                 {"category":{$regex:req.params.key}}
//             ]
//         }
//     )
//     res.send(data);
// })

// app.listen(5000);


//FILE UPLOADING 

// const express = require('express');
// const multer = require('multer');

// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "uploads");
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file");
// app.post("/upload", upload, (req, res) => {
//     res.send('file upload')
// });

// app.listen(5000);


// const express = require('express');
// const EventEmitter = require('events');

// const app = express();
// const event = new EventEmitter();

// let count=0;

// event.on("countAPI",()=>{
//     count++;
//     console.log('event called',count);
// });

// app.get("/",(req, res)=>{
//     res.send('api called');
//     event.emit("countAPI");
// });

// app.get("/search",(req, res)=>{
//     res.send('search api called');
//     event.emit("countAPI");
// });

// app.get("/update",(req, res)=>{
//     res.send('update api called');
//     event.emit("countAPI");
// });

// app.listen(5000);
