const express = require("express");
const axios = require("axios");
const services = require("../data/serviceRegistry.json");
const app = express();
app.use(express.json());
app.listen(8080,()=>{
  console.log("listening at http://localhost:8080");
});


app.get("/check",async (req,res,next)=>{
  console.log("hello world !");
  console.log(services.notes.note.url)
  const result = await axios.get(services.notes.note.url);
  if(result){
    res.send(result);
  }else{
    res.send()
  }
  // console.log(result);
  res.json(result);
  // res.send("hello");
})