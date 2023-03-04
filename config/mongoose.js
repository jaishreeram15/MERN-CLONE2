const mongo = require("mongoose");
mongo.connect("mongodb+srv://test2:test2@cluster0.grk72xg.mongodb.net/?retryWrites=true&w=majority")
const connect = mongo.connection
connect.on("error",function(err){console.log("error connecting to database !!",err)})
connect.once("open",function(){
    console.log("successfully connected to the Database !!")
})
// hellow orldsa


module.exports=mongo