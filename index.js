
const express = require("express");
 const server = express();
 const bodyParser = require("body-parser")

 const {
    handleCreateBook,
    handleViewBook, 
    handleUpdateBook,
    handleDeleteBook,
    }= require("./bookController")

const mongoose = require("mongoose")




 server.use(bodyParser.json())



 server.get("/book/:id?", handleViewBook);
server.post("/book", handleCreateBook);
 server.put("/book", handleUpdateBook);
server.delete("/book", handleDeleteBook);




 mongoose.connect("mongodb+srv://Books:qwertyeric3303490749@cluster0.b6fgowd.mongodb.net/Books?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true}
).then(result=>{
    server.listen(3000, ()=>console.log("server is ready for business"))

}).catch(error=>console.log(error));