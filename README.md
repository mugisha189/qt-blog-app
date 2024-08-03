# QT Blog

QT Blog is anapplication that includes a client-side built with React(Typescript) and a server-side built with Node.js(Typescript), Express, and MariaDB. This documentation will guide you through setting up and running both the client and server.

## Project Structure

```

QT-Blog/
├── client/ # React application
│ ├── src/
│ │ ├── assets/ # Static assets
│ │ │ ├── imgs/ # Image files
│ │ │ └── svgs/ # SVG files
│ │ ├── components/ # Reusable components
│ │ │ ├── core/ # Custom components like tables, inputs, file inputs, text editor
│ │ │ ├── home/ # Components used on the homepage
│ │ │ ├── posts/ # Components for posts, comments, deleting posts
│ │ │ └── user/ # Components for user management, like changing user roles
│ │ ├── context/ # Context providers
│ │ │ ├── UserContext.tsx # Provides user and auth-related context
│ │ │ └── ModalContext.tsx # Provides modal context
│ │ ├── hooks/ # Custom hooks for fetching data, accessing context, etc.
│ │ ├── pages/ # Different pages of the application
│ │ │ ├── app/ # Pages accessible only when authenticated
│ │ │ └── auth/ # Login, Signup, and other authentication pages
│ │ ├── utils/ # Utility functions and types
│ │ │ ├── funcs/ # Functions for CRUD operations, Cloudinary, etc.
│ │ │ └── types/ # Type definitions used throughout the app
│ │ └── index.tsx # Entry point of the client application
│ └── package.json # Client package configuration
│
├── server/ # Express server and API
│ ├── src/
│ │ ├── api/
│ │  |  ├── controllers/ # API controllers
│ │  |  ├── models/ # Database models
│ │  |  ├── db/ # Database connection and seed file
│ │  |  ├── interfaces/ # Different interfaces used in the app
│ │  |  ├── routes/ # API routes
│ │  |  ├── middleware/ # Custom middleware
│ │  |  ├── validations/ # Validations for ids and req.body using Joi
│ │ ├── config/ # Configuration files
│ │ └── server.ts # Entry point of the server application
│ └── package.json # Server package configuration
└── README.md # Project documentation

```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **Yarn** or **npm**
- **MariaDB** (Ensure MariaDB is running on port 3306)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mugisha189/QT-Blog.git
cd QT-Blog
```

### 2. Create the Database

Ensure MariaDB is running on port `3306`, and create a new database named `qt-blog`:

```sql
CREATE DATABASE `qt-blog`;
```

### 3. Install Dependencies

Navigate to both the `client` and `server` directories separately and install the dependencies.

#### Client

```bash
cd client
yarn add
# or
npm install
```

#### Server

```bash
cd ../server
yarn add
# or
npm install
```

### 4. Run the Application

You need to start the client and server separately.

#### Running the Client

Navigate to the `client` directory and run:

```bash
yarn start
# or
npm start
```

The client will be accessible at `http://localhost:3000`.

#### Running the Server

Navigate to the `server` directory and run:

```bash
yarn dev
# or
npm run dev
```

The server will run at `http://localhost:5000`.

## Available Scripts

### Client

In the `client` directory, you can run:

- **`yarn start` / `npm start`**: Starts the React development server.
- **`yarn build` / `npm run build`**: Builds the React application for production.

### Server

In the `server` directory, you can run:

- **`yarn start` / `npm start`**: Starts the Express server.
- **`yarn dev` / `npm run dev`**: Starts the Express server with Nodemon for hot-reloading.
