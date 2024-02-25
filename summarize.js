const cheerio = require("cheerio");
const axios = require("axios");

const url = "https://web.uri.edu/career/professional-associations-and-affinity-groups/";

axios.get(url).then((response) => {
  // Load the HTML into cheerio
  const $ = cheerio.load(response.data);
  const associations = [];

  // Assuming the list items are not structured with specific classes, we target all <li> elements
  $("li").each((i, el) => {
    const element = $(el);

    // Extracting the <a> tag within the list item
    const linkElement = element.find("a");
    const link = linkElement.attr("href");
    const name = linkElement.text().trim();

    // The description is assumed to be the text within the <li>, excluding the <a> text
    const description = element.text().replace(name, '').trim();

    // If name and link are not empty, add to associations array
    if (name !== "" && link !== "") {
      associations.push({ name, description, link });
    }
  });

  console.log(associations);
}).catch(error => {
  console.error('Error fetching the webpage:', error);
});
