# Career Compass

Career Compass is a web application designed to provide comprehensive career navigation assistance by leveraging advanced technologies. Explore job opportunities, scholarships, events, and organizations aligned with your interests and goals with Career Compass. 

## Inspiration
Our inspiration arises from the need to make vital career information more accessible, especially for marginalized communities. We aim to empower individuals by equipping them with the resources needed to navigate their career paths effectively.

## What it does
Career Compass classifies user queries and retrieves relevant information from the internet, presenting it in a user-friendly format. It offers insights into job opportunities, scholarships, events, and organizations tailored to the user's preferences. Additionally, Career Compass includes a summarization feature to condense lengthy texts, enhancing accessibility.

## How we built it
We built Career Compass using React for the frontend and Tailwind CSS for sleek design and responsiveness. Leveraging the Cohere API, we implemented natural language processing to accurately classify user queries. We used Cheerio and Axios to scrape data from websites and integrated the Cohere API for text summarization.

## Challenges we ran into
Scraping information from diverse websites and ensuring accurate classification and summarization of user queries presented significant challenges. Overcoming these hurdles required innovative solutions and collaboration among team members.

## Accomplishments that we're proud of
We're proud of creating a visually appealing and user-friendly web application that caters to the needs of underrepresented groups. Our focus on clean design and intuitive functionality reflects our commitment to accessibility and inclusivity.

## What we learned
Throughout the development process, we gained valuable experience in creating React applications from scratch and integrating external APIs. We also learned to leverage tools like an Express proxy server and the Cohere API for classification and summarization tasks.

## What's next for Career Compass
In the future, we plan to expand Career Compass by incorporating additional resources and enhancing the information scraped from websites. We aim to introduce features such as user authentication to enable saving and tracking of jobs and opportunities, further empowering users in their career journeys.

## Usage for Developers
To set up Career Compass for development:
1. Ensure you have Node.js and npm installed on your system.
2. Run `npm install` from the root directory to install dependencies.
3. Navigate to the `express` directory and run `node Scraper.js` in your terminal.
4. In another terminal, navigate to the `nsbe` folder, run `npm install`, and then `npm start` to start the application.
