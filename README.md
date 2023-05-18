# Food Explorer
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/AugustoBosa/Food-Explorer-Backend/blob/main/README.pt-br.md)

> 🍔🌮 An interactive online menu for ordering and paying for food.

This project is the final project of the Explorer Course by Rocketseat. The Food Explorer application allows clients to browse and order food items from a menu, as well as make payments online.

Check it working: [Food Explorer Demo](https://gus-foodexplorer.netlify.app/)

Please note that the deployed demo is provided for demonstration purposes and may not reflect real-time data or functionality.

# Table of Contents

- 🌐 [Languages](#languages)
- ⚙️ [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- 📖 [Usage](#usage)
  - [Client Side](#client-side)
  - [Admin Side](#admin-side)
  - [Deployment](#deployment)
- ✨ [Features](#features)
- 📚 [Documentation](#documentation)
  - [Backend](#backend-documentation)
  - [Frontend](#frontend-documentation)
- 🤝 [Contributing](#contributing)
- 📝 [License](#license)
- 🙏 [Acknowledgments](#acknowledgments)
- ⚠️ [Project Maintenance](#project-maintenance)
- 📞 [Contact](#contact)

## 🌐 Languages <a name="languages"></a>

The Food Explorer application is currently available in Portuguese (Brazil) only.

**Note:** As part of the Explorer course and given that there are no plans for additional applications, there are currently no plans to translate the application into English.


## ⚙️ Installation <a name="installation"></a>

### Backend <a name="backend"></a>

1. Clone the backend repository:

   ```bash
   git clone https://github.com/AugustoBosa/Food-Explorer-Backend.git
   ```

2. Install backend dependencies:

   ```bash
   cd Food-Explorer-Backend
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file provided in the backend directory.
   Configure the environment variables as desired.

4. Start the backend development server:

   ```bash
   npm run dev
   ```

### Frontend <a name="frontend"></a>

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/AugustoBosa/Food-Explorer-Frontend.git
   ```

2. Install frontend dependencies:

   ```bash
   cd Food-Explorer-Frontend
   npm install
   ```

3. Edit the `src/services/api.js` file and update the `baseURL` to match the desired backend address. Use `http://localhost:3333` if the backend is running on the default port, or update it according to the value specified in the `.env` file.

4. Start the frontend development server:

   ```bash
   npm start
   ```

5. Access the frontend application at `http://localhost:5173` or the port specified in the `vite.config.js` file.

## 📖 Usage <a name="usage"></a>

### Client Side <a name="client-side"></a>

1. Create an account or log in to your existing account.
2. Browse the menu and select the desired food items.
3. Add the items to your cart.
4. Remove unwanted ingredients from dishes.
5. Proceed to checkout and enter your payment details.
6. Confirm your order.
7. Keep up with the status of your order on the order tracking page.

### Admin Side <a name="admin-side"></a>

1. Log in to your admin account.
2. Create new dishes and ingredients.
3. View open orders and update their status to match their current production status.

**Note:** A default admin user is created during the database initialization with the email "administrador" and password "administrador". 

Check the application on the admin side using the default admin credentials: [Food Explorer Demo](https://gus-foodexplorer.netlify.app/admin)


### 🚀 Deployment <a name="deployment"></a>

Backend:

The backend is deployed on Render (https://foodexplorer-api-r8fs.onrender.com).

Frontend:

The frontend is deployed on Netlify (https://gus-foodexplorer.netlify.app).

Please note that these deployment links are provided as examples and may not be accessible or available in the future.


## ✨ Features <a name="features"></a>

- User authentication and authorization for clients and admins.
- Interactive menu with categories, search functionality, and dish customization.
- Add items to the cart and manage the cart contents.
- Real-time order tracking for clients.
- Remove unwanted ingredients from dishes.
- Admin panel to manage dishes, ingredients, and orders.
- Order history pages for both clients and admins.
- Please note that there is no payment validation implemented in this application. The credit card payment section has a data format/regex for the credit card number, but no validation or real payment processes are implemented. To facilitate user navigation between order states, users can click on the image of the payment status message to advance the order on the production line.


## 📚 Documentation <a name="documentation"></a> 

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/sqlite/sqlite-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" width="35px"></img>
<img src="https://github.com/devicons/devicon/blob/master/icons/github/github-original.svg" width="35px"></img>


### Backend <a name="backend-documentation"></a>

The backend of the Food Explorer application is built using Node.js. It serves as the server-side component that handles requests from the frontend and interacts with the database. The backend provides the necessary APIs for user authentication, menu management, order handling, and more.

To run the backend server, make sure you have Node.js installed. Clone the backend repository and follow the instructions in the [Installation](#installation) section to set up the project.

The backend utilizes the following dependencies:

- [bcryptjs](https://www.npmjs.com/package/bcryptjs): A library for hashing passwords.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- [dotenv](https://www.npmjs.com/package/dotenv): A module for loading environment variables from a `.env` file.
- [express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [express-async-errors](https://www.npmjs.com/package/express-async-errors): A middleware to handle async errors in Express.js.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): An implementation of JSON Web Tokens (JWT) for token-based authentication.
- [knex](https://knexjs.org/): A query builder for Node.js that supports multiple database systems.
- [moment-timezone](https://www.npmjs.com/package/moment-timezone): A library for parsing, manipulating, and formatting dates and times with timezone support.
- [multer](https://www.npmjs.com/package/multer): A middleware for handling file uploads in Express.js.
- [pm2](https://www.npmjs.com/package/pm2): A production process manager for Node.js applications.
- [sqlite](https://www.npmjs.com/package/sqlite): A module that provides a simple interface to interact with SQLite databases.
- [sqlite3](https://www.npmjs.com/package/sqlite3): A library for accessing SQLite databases.

For more information about each dependency, please refer to their respective documentation on npm.

To start the backend server, use the `npm run dev` command. The server will be running on port 3333 (or the port specified in the `.env` file).

Please make sure to configure the `.env` file based on the provided `.env.example` file, adjusting the necessary environment variables as desired.


### Frontend <a name="frontend-documentation"></a>

The frontend of the Food Explorer application is built using React. It is designed with a mobile-first mentality and follows a design provided in [Figma](https://www.figma.com/community/file/1196874589259687769). The frontend is developed with a focus on creating a responsive and intuitive user interface. To achieve fluid transitions between screen sizes, the app utilizes custom CSS styles and the [EzClamp](https://github.com/AugustoBosa/EzClamp) app, developed by the project author.

To run the frontend application, make sure you have Node.js installed. Clone the frontend repository and follow the instructions in the [Installation](#installation) section to set up the project.

The frontend utilizes the following dependencies and development dependencies:

- [axios](https://www.npmjs.com/package/axios): A promise-based HTTP client for making API requests.
- [jwt-decode](https://www.npmjs.com/package/jwt-decode): A library for decoding JSON Web Tokens (JWT).
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): A package for rendering React components in the DOM.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): A routing library for React applications.
- [styled-components](https://styled-components.com/): A CSS-in-JS library for styling React components.
- [@types/react](https://www.npmjs.com/package/@types/react): TypeScript type definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): TypeScript type definitions for React DOM.
- [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react): A Vite plugin for React development.
- [vite](https://vitejs.dev/): A fast development server and build tool for modern web applications.

For more information about each dependency, please refer to their respective documentation on npm.

Before running the frontend application, make sure to edit the `api.js` file and set the desired backend address using the default port 3333 or the one specified in the `vite.config.js` file.

To start the frontend application, use the `npm run dev` command. The application will be running on port 5173 (or the port specified in the `vite.config.js` file).


## 🤝 Contributing <a name="contributing"></a>

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to contribute to the Food Explorer project. Here are a few ways you can contribute:

- Report bugs or issues you encounter while using the application.
- Suggest new features or enhancements to improve the user experience.
- Submit pull requests with bug fixes, feature implementations, or documentation improvements.
- Help improve the project's documentation by fixing typos, clarifying explanations, or adding examples.

To contribute, please follow these steps:

1. Fork the repository and create your branch from the `main` branch.
2. Make your changes, ensuring that your code follows the project's coding guidelines.
3. Commit your changes with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository, describing the changes you made.

I appreciate your contributions and feedback to make Food Explorer even better!

 
## 📝 License <a name="license"></a>

This project is licensed under the [MIT License](https://github.com/AugustoBosa/Food-Explorer-Backend/blob/main/LICENSE).


## 🙏 Acknowledgments <a name="acknowledgments"></a>

The Food Explorer application was developed as the final project of the Explorer course by Rocketseat. I would like to express my gratitude to Rocketseat for providing the knowledge and resources to build this application.

I would also like to thank the following individuals and resources for their contributions and inspiration:

[Rocketseat](https://www.rocketseat.com.br/) for their comprehensive course materials and support.
[Figma](https://www.figma.com/) community for providing the design inspiration and resources. The frontend of the application was developed based on a Figma design provided.
[EzClamp](https://augustobosa.github.io/EzClamp/) - a tool developed to enhance the fluidity of transitions between screen sizes in the frontend development process.
I am thankful for the guidance and support received during the development of Food Explorer.


## ⚠️ Project Maintenance <a name="project-maintenance"></a>

The Food Explorer project is actively maintained and may undergo rework and updates to address any potential bugs or issues that may arise in the future. At the moment, no bugs have been reported.

Please note that the deployment links provided may become offline or inaccessible in the future due to various reasons. If you encounter any difficulties accessing the application or have any inquiries, feel free to reach out to me for assistance.

Your feedback and contributions are valuable in improving the project, so please don't hesitate to report any bugs or suggest enhancements if you come across them. Together, we can make Food Explorer even better!


## 📞 Contact <a id="contact"></a>

For any inquiries or questions, feel free to contact me:

📧 - dev.augustobosa@gmail.com 

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/347bc18a-8e27-48eb-835f-1411f3229916) -  +55 48 9.9953-1842 

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/7451cd53-6201-42ed-bf24-4838179ab9c9) - [AugustoBosa](https://github.com/AugustoBosa)

![image](https://github.com/AugustoBosa/Food-Explorer-Frontend/assets/115903598/93ba70a7-fc22-4e79-96d0-5f4d3dec5912) - [AugustoBosa](https://www.linkedin.com/in/augusto-bosa/)

Please don't hesitate to reach out if you have any questions or need further assistance.







.
