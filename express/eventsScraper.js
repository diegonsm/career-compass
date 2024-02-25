// scraper.js

const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
const cors = require('cors');

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

const url = "https://www.black.future.utoronto.ca/whats-on";

// Function to scrape events data
async function getEvents() {
    try {
        // Get the HTML from the URL
        const response = await axios.get(url);
        // Load the HTML into cheerio
        const $ = cheerio.load(response.data);
        const attr = []
        $(".summary-item").each((i, el) => {
            const product = $(el);
            const id = i;
            const desc = product.find(".summary-excerpt").text();
            const link = 'https://www.black.future.utoronto.ca' + product.find(".sqs-gallery-image-container").attr("href");
            const title = product.find(".summary-title").text();
            // If title, description, and link are not empty, add to attr array
            if (title !== "" && desc !== "" && link !== "") {
                attr.push({ id, title, desc, link });
            }
        });
        return attr;
    } catch (error) {
        throw new Error("Error scraping products: " + error.message);
    }
}

// Define route to fetch events data
app.get('/events', async (req, res) => {
    try {
        const events = await getEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export getEvents function
module.exports = { getEvents };
