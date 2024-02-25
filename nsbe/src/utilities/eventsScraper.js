// src/scraper.js
const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://www.black.future.utoronto.ca/whats-on";

export function getEvents() {
    try {
        // Get the HTML from the URL
        axios.get(url).then((response) => {
          // Load the HTML into cheerio
          const $ = cheerio.load(response.data);
          const attr = []
          console.log()
          $(".summary-item").each((i, el) => {
            const product = $(el);
            const id = i;
            const desc = product.find(".summary-excerpt").text();
            const link = 'https://www.black.future.utoronto.ca' + product.find(".sqs-gallery-image-container").attr("href");
            const title = product.find(".summary-title").text();
            // If both title, price and link are not empty, add to products array
            if (title !== "" && desc !== "" && link !== "") {
              attr.push({ id, title, desc, link});
            }
          });
          return(attr);
        });
    } catch (error) {
        console.log(error);
    }
}


