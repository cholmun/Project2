Chef Knows Best
A comprehensive recipe database designed to make finding and managing recipes effortless.

Table of Contents
Description
Technologies Used
Features
Installation
Usage
Deployed Application

Description
Chef Knows Best is a full-stack recipe database application that allows users to discover, save, and contribute recipes. Built using modern web technologies, it provides a seamless experience for culinary enthusiasts. Recipes and ingredients are sourced dynamically from TheMealDB and other APIs, with secure user authentication for personalized functionality.

User Story
As food enthusiasts, We wanted an intuitive platform to explore recipes, save our favorites, and add personal recipes so we can organize and expand our culinary knowledge.

Acceptance Criteria
RESTful API developed using Node.js and Express.js.
A responsive front-end built with React.
Database management powered by PostgreSQL and Sequelize ORM.
Support for GET and POST routes for retrieving and adding data.
Integration of at least two server-side APIs, including TheMealDB.
Authentication using JWT for secure user accounts.
Deployment using Render, with pre-seeded data.
High-quality codebase adhering to best practices and conventions.

Technologies Used
Back End: Node.js, Express.js
Front End: React
Database: PostgreSQL, Sequelize ORM
Authentication: JSON Web Tokens (JWT)
Deployment: Render

APIs Used:
TheMealDB (Primary Recipe Data)
Spoonacular (API)

Environment Management: dotenv

Features
Explore Recipes: Browse recipes sourced from TheMealDB with detailed ingredient lists and instructions.
Personal Recipe Management: Add, view, and manage personal recipes.
User Authentication: Secure login and personalized experience with JWT-based authentication.
Responsive UI: Fully responsive design for accessibility on any device.
Secure API Handling: Sensitive data and API keys are protected using environment variables.
Dynamic User Interaction: Interactive features that respond to user input in real-time.

Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd <repository_folder>
Install dependencies for both the client and server:

bash
Copy code
npm install
cd client
npm install
Configure environment variables in the .env file:

plaintext
Copy code
DB_USER=<your_username>
DB_PASSWORD=<your_password>
DB_NAME=<database_name>
JWT_SECRET=<your_jwt_secret>
THEMEALDB_API_KEY=<your_themealdb_api_key>
ADDITIONAL_API_KEY=<your_additional_api_key>
Run the application:

bash
Copy code
cd ..
npm run dev

Usage
Sign up or log in to access personalized features.
Explore recipes by searching or browsing categories.
Save favorite recipes or add personal recipes to the database.

Deployed Application
Check out the live site here: https://chef-knows-best.onrender.com/

Contacts/Github
https://github.com/cholmun/Project2
nicolas6jimenez13@gmail.com 
kevingarts@gmail.com
c.holmun55@gmail.com
jhegarty968@gmail.com

