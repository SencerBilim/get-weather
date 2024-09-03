import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 

app.get("/", async (req, res) => {
  try {
    const { location } = req.query;

    // Default location
    const queryLocation = location || 'Istanbul, Turkey';

    // weather API
    const weatherResponse = await axios.get("https://api.weatherstack.com/current", {
      params: {
        access_key: process.env.WEATHER_API_KEY,
        query: queryLocation,
      },
    });

    const data = weatherResponse.data;

    res.render("index.ejs", {
      rain: data.current.weather_descriptions[0] || 'No description available',
      icon: data.current.weather_icons[0] || 'No icon available',
      temperature: data.current.temperature || 'N/A',
      location: data.location.name || 'Unknown location',
      country: data.location.country || 'Unknown country',
      localtime: data.location.localtime || 'Unknown time',
      error: null 
    });
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.render("index.ejs", {
      error: "Something went wrong while fetching the weather data.",
      rain: null,
      icon: null,
      temperature: null,
      location: null,
      country: null,
      localtime: null
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
