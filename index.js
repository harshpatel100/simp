const express = require('express')
const app = express()
app.get("",(req,res)=>{
  res.statusCode=200
  res.setHeader('content-Type','text/html')
  res.write("hellow world!!")
  res.end()
})
app.listen(process.env.PORT,()=>{
  console.log("ya")
})
