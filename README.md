# Penguin News

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies)
- [API](#api)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

<a name="introduction"/>

## Introduction

**The Penguin News App** is a web-based application that allows users to stay up-to-date with the latest news from various sources. The app provides a user-friendly interface to browse news articles, search for specific topics, and save favorite articles using bookmark feature for later reading. It utilizes the [News API](https://newsapi.org/) to fetch news data from multiple sources.

<a name="features"/>

## Features

- Browse news articles from different sources
- Search for specific news topics or keywords
- User authentication and authorization
- Add profile photo
- Save favorite articles for later reading with bookmark 

<a name="screenshots"/>

## Screenshots

<a name="technologies"/>

## Technologies Used

- React: JavaScript library for building user interfaces
- Typescript: Superset of JavaScript that adds static typing
- Firebase: Platform for developing web and mobile applications
- Bootstrap: Front-end CSS framework for responsive design

<a name="api"/>

## API

The Penguin News App utilizes the [**News API**](https://newsapi.org/) to fetch news data. The API provides a plethora of news sources and articles, allowing the app to display the latest news from various publishers.

<a name="installation"/>

## Instalation

To run the Penguin News App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/news-app.git`
2. Navigate to the project directory: `cd news-app`
3. Install the dependencies: `npm install`

<a name="usage"/>

## Usage

1. Get an API key from News API 
2. Open the `src/helpers/helpers.ts` file and replace the value of `API_KEY` with your API key.
3. Start the development server: `npm start`
4. Open your browser and visit: `http://localhost:3000`

<a name="contributing"/>

## Contributing

Contributions are always welcome! If you find any bugs or want to improve the app, please open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature-branch`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Open a pull request
