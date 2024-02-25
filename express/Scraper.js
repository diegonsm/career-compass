// scraper.js

const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
const cors = require('cors');

const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());

const eventsURL = "https://www.black.future.utoronto.ca/whats-on";
const jobsURL = "https://www.diversityjobboard.com/";
const orgsURL = "https://web.uri.edu/career/professional-associations-and-affinity-groups/";
const scholarshipsURL = "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/minority-scholarships"

// Function to scrape events data
async function getEvents() {
    try {
        // Get the HTML from the URL
        const response = await axios.get(eventsURL);
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

// Function to scrape jobs data
async function getJobs() {
    try {
        const response = await axios.get(jobsURL);
        const $ = cheerio.load(response.data);
        const attr = [];
        $(".panel.card.panel-default").each((i, el) => {
            const jobElement = $(el);
            const id = i;
            const title = jobElement.find('.job-title a').text().trim();
            const link = jobElement.find('.job-title a').attr('href');
            const desc = jobElement.find('.job-desc .job-description').text().trim();

            if (title && desc && link) {
                attr.push({ id, title, desc, link });
            }
        });
        return attr;
    } catch (error) {
        throw new Error("Error scraping job listings: " + error.message);
    }
}

// Function to scrape orgs data
async function getOrgs() {
    try {
        const response = await axios.get(orgsURL);
        const $ = cheerio.load(response.data);
        const attr = [];

        $("div.fullwidth ul li").each((i, el) => {
            const element = $(el);
            const id = i;
            const linkElement = element.find("a");
            const link = linkElement.attr("href");
            const title = linkElement.text().trim();
            const desc = element.text().trim().replace(title, '').trim();
            if (title !== "" && desc !== "" && link !== "") {
                attr.push({ id, title, desc, link });
            }
        });
        return attr;
    } catch (error) {
        throw new Error("Error scraping associations: " + error.message);
    }
}

// Function to scrape scholarships data
async function getScholarships() {
    try {
        const response = await axios.get(scholarshipsURL);
        const $ = cheerio.load(response.data);
        const attr = [];

        $("div.award-box").each((i, el) => {
            const element = $(el);
            const id = i;
            const linkElement = element.find('a').first();
            const link = linkElement.attr('href');
            const title = linkElement.find('h2').text().trim();
            const desc = linkElement.find('p').text().trim();

            if (title !== "" && desc !== "" && link !== "") {
                attr.push({ id, title, desc, link });
            }
        });

        return attr;
    } catch (error) {
        throw new Error("Error scraping scholarships: " + error.message);
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

// Define route to fetch jobs data
app.get('/jobs', async (req, res) => {
    try {
        const jobs = await getJobs();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/orgs', async (req, res) => {
    try {
        const orgs = await getOrgs();
        res.json(orgs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/scholarships', async (req, res) => {
    try {
        const scholarships = await getScholarships();
        res.json(scholarships);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export functions
module.exports = { getEvents, getJobs, getScholarships, getOrgs };
