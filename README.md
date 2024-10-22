# QuickSell Assignment 

Made with ❤️ by [Mohammad Shaad - 21BCE1542](https://mohammadshaad.github.io/)

## Table of Contents

- [About the Project](#about-the-project)
- [Deployed Application](#deployed-application)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

## About the Project

This project is a Ticket Management System built with React. It allows users to manage and organize tickets by different groupings such as status, priority, and user.

## Deployed Application

The application is deployed on Vercel and can be accessed [here](https://shaad-quicksell-assignment.vercel.app/).

## Project Structure

The project is structured as follows:

```plaintext
ticket-management-system/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Column.jsx
│   │   ├── DisplayDropdown.jsx
│   │   ├── Grid.jsx
│   │   ├── Header.jsx
│   │   ├── IconComponent.jsx
│   │   ├── Loader.jsx
│   │   ├── UserIcon.jsx
│   ├── assets/
│   ├── context/
│   │   ├── TicketContext.js
│   ├── styles/
│   │   ├── card.css
│   │   ├── column.css
│   │   ├── displayDropdown.css
│   │   ├── grid.css
│   │   ├── header.css
│   │   ├── loader.css
│   │   ├── userIcon.css
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── index.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
```sh
    git clone https://github.com/mohammadshaad/Quicksell-Assignment.git
```
2. Navigate to the project directory:
```sh
    cd ticket-management-system
```
3. Install the dependencies:
```sh
    npm install
```

### Running the Application

To start the development server, run:
```sh
npm start
```

The application will be running at `http://localhost:3000`.