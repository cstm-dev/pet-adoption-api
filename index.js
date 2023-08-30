import { API_TOKEN } from "./config.js";
import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const API_URL = "https://api.petfinder.com/v2";
const config = {
  headers: { Authorization: `Bearer ${API_TOKEN}` },
};

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.render(`${__dirname}/views/index.ejs`);
});

app.get("/pet-details", async (req, res) => {
  const limit = 20;
  const randomizer = Math.floor(Math.random() * limit);

  try {
    const request = await axios.get(
      `${API_URL}/animals?limit=${limit}`,
      config
    );
    const result = request.data.animals[randomizer];
    const petDetails = {
      Age: result.age,
      Type: result.type,
      Breed: result.breeds.primary,
      Gender: result.gender,
      Size: result.size,
      Color: result.colors.primary,
      Coat: result.coat,
    };
    
    res.render(`${__dirname}/views/pet_view.ejs`, {
      petData: result,
      petDetails: petDetails,
    });
  } catch (error) {
    console.error("Error in router /pet-details", error.message);
  }
});

app.listen(port, () => {
  console.info(`Server running on port: ${port}`);
});
