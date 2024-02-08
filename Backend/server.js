const express = require('express')
const app = express()
const port = 4069

const connectDB = require('./config/db')

//parse json data while posting
app.use(express.json())

connectDB()

app.get("/ping",(req,res)=>{
    res.send('pong')
})

app.get("/",(req,res)=>{
    res.send("Weirdest Fashion API Working at '/' endpoint")
    
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})