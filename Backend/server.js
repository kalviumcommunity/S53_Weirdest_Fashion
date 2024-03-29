const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const connectDB = require("./config/db");
//parse json data while posting
app.use(express.json());
app.use(cors());
connectDB();


app.use("/api/Collections",require("./Routes/routes"));
app.use("/api/Users" ,require("./Routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
