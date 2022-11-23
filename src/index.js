import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () =>
    console.log(`Server running in port: ${process.env.PORT} `)
)