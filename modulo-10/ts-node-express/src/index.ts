import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello, Developers! Welcome to Typescript with Express.js!!</h1>"
  );
});

app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`));
