import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json()); // to parse the incoming request with json payload (from req.body)

app.get('/', (req, res) => {
    res.send('Hello, World!!');
  });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});