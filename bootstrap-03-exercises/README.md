## About The Project

Welcome! This repository contains a collection of exercises based on the Udemy course "Bootstrap 5 From Scratch | Build 5 Modern Websites" by Brad Traversy. The course was last updated in June 2023, and the exercises included here aim to reinforce key concepts of Bootstrap 5, including its grid system, components, utilities, and responsive design techniques.

Each exercise is structured to provide hands-on experience with HTML, CSS, and Bootstrap 5, following best practices in front-end development.

- [Udemy Instructor](https://www.udemy.com/user/brad-traversy/)
- [Udemy Course](https://www.udemy.com/course/bootstrap-from-scratch/)

## Getting Started

### Prerequisites

- To get started, make sure you have any code editor installed.

### Installation

1. Clone the repository to your local machine

### Usage

To customize any of these websites, you need to install Node.js and run the following in the project folder:

```sh
npm install
```

This will install Bootstrap, Sass and Font Awesome. To build your CSS files from Sass, run:

```sh
npm run sass:build
```

To watch your Sass files for changes, run:

```sh
npm run sass:watch
```

For custom stying, use the `scss/styles.scss` file.

To customize Bootstrap, you can add Bootstrap variables to the `scss/bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.
