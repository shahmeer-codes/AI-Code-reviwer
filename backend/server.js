import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
});

app.use("/ai", aiLimiter);

app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});