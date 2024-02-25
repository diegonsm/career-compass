const cheerio = require("cheerio");
const axios = require("axios");
const router = require("express").Router();

const url = "https://bold.org/scholarships/by-demographics/minorities/";

try {
    // Get the HTML from the URL
    axios.get(url).then((response) => {
      // Load the HTML into cheerio
      const $ = cheerio.load(response.data);
      const attr = []
      console.log()
      $(".ScholarshipGroupContainer-module--scholarshipContainer--28fef").each((i, el) => {
        const product = $(el);

        const desc = product.find(".SimpleScholarshipItem-module--description--6133d").text();
        const link = "bold.org" + product.find("a.SimpleScholarshipItem-module--container--eeab6").attr("href");
        const title = product.find(".SimpleScholarshipItem-module--name--a8f17").text();
        
        if (title !== "" && desc !== "" && link !== "") {
          attr.push({ title, desc, link});
        }
      });
      console.log(attr)
    });
} catch (error) {
    res.statusCode(500).json({
      message: "Error scraping products",
      error: error.message,
    });
  } 