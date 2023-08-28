import { API_TOKEN } from "./config.js";
import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const API_URL = "https://api.petfinder.com/v2";

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.render(`${__dirname}/views/index.ejs`);
});

app.listen(port, () => {
  console.info(`Server running on port: ${port}`);
});
