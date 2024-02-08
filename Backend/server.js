const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

const connectDB = require('./config/db')

//parse json data while posting
app.use(express.json())

connectDB()

// app.get("/ping",(req,res)=>{
//     res.send('pong')
// })

// app.get("/",(req,res)=>{
//     res.send("Weirdest Fashion API Working at '/' endpoint")
// })

app.use('/api/Collections',require('./Routes/routes'))

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})