// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, overview, description, installation, usage, license, contributing, tests, github, email) {
  return `
# ${title}

Overview of project: ${overview}

## Description

***

* ${description}

## Table of Contents

***

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation <a name = 'introduction'></a>

***

* ${installation}

## Usage  <a name = 'usage'></a>

***

* ${usage}

## License  <a name = 'license'></a>

***

* This project is licensed under the ${license} License - see the LICENSE.md file for details

## Contributing  <a name = 'contributing'></a>

***

* ${contributing}

## Test  <a name = 'test'></a>

***

* ${tests}

## Questions  <a name = 'questions'></a>

***

* Github username: ${github}

* Feel free to email me at ${email} if you have any further questions.

## Acknowledgments

***

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
`;
}
//look up
module.exports = generateMarkdown;
