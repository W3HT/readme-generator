// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =  require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your the title of your project?',

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a shor description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a step-by-step description of how to get the development environment running.' 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.', 
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Mozilla Public License 2.0','Boost Software License 1.0','MIT License', 'Apache License 2.0', 'No License'],  // **
    },
    {
        tpye: 'input',
        name: 'test',
        message: 'Please provide Test Instructions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }


];


// // render license table of contents
// function renderLicense() {
//     licenseUrl = (badge === "") ? ` `: `
//     - [License](#license)
//     `
//     return licenseUrl
// }

// // render license block
// function renderLicenseBlock(license) {
//     licenseBlock = ( badge === "") ? ` `: `
//     ## License
//     ${license}
//     `
//     return licenseBlock
// }

// function to grab badge URL
function generateBadge(license) {
    switch (license) {
        case data = "Mozilla Pulic License 2.0":
            badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case data = "Boost Software Licence 1.0":
            badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://opensource.org/licenses/BSL-1.0)";
            break;
        case data = "MIT License":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case data = "Apache License 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case data = "No License":
            badge = "";
            break;
    }
    return badge;
}

// Function call to initialize app

function renderMD(data){

    return `

    # ${data.projectTitle}        
    
    ${generateBadge(data.license)}

    ## Description
    ${data.description}
        
    --- 
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)
    
    ---
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Contributions
    ${data.contribution}
        
    ---
    ## Tests
    ${data.test}
    ---
    ## License
    ${data.license} 

    ---

    ## Questions
    Conact info:
    [GithHub](https://github.com/${data.github})
    [Email](${data.email})
        
`;
}

// TODO: Create a function to initialize app

function saveMD(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log ('Save README Success!')
    );
}

function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const readmeMD  = renderMD(response);
            saveMD('finalREADME.md', readmeMD)
        });        
}

init();
