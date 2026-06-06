import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()) 

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", aiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});