import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";


import postRoutes from './routes/posts.js'
// const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use('/posts',postRoutes)

const Connection_URL =

const PORT = process.env.PORT || 5000;

mongoose
  .connect(Connection_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => app.listen(PORT, () => console.log("Server is running")))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  });

  

// mongoose.set("useFindAndModify", false);

