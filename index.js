const express = require('express')
const app = express()
app.get("",(req,res)=>{
  res.write("hellow world!!")
})
app.listen(3000,()=>{
  console.log("ya")
})
