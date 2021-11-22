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
        name: 'installation'
        message: 'Please provide a step-by-step description of how to get the development environment running.' 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles',
    },
    {
        type: 'list',
        name: 'licence',
        choices: ['Mozilla Public License 2.0','Boost Software License 1.0','MIT License', 'Apache License 2.0', 'No License'],
    }


];

init();
    inquirer
        .prompt(questions)
        .then((res) => {
            const textMessage = `

            # ${response.projectTitle}

            ## ${response.description}
                

            ## Table of Contents
            - [Installation](#installation)
            - [Usage](#usage)
            - [Credits](#credits)
            - [License](#license)
            
            ## ${response.installation}
            
            ## ${response.usage}
                

            ## ${response.credits}
            
            ## LICENSE 
                

            ## Badges
            

            ## Features
                

            ## How to Contribute
                

            ## Tests
                
                
            
        `
            

        });

// TODO: Create a function to write README file
        // function writeToFile("README.md", textMessage, err = {
        //     err ? console.log("Big Trouble") : console.log("Generating README.md")
        // })
function generateREADMEFile(input) {
    let readmeTitle;
    let readmeDescription;
    const descriptionEl = "## Description";
    let tableOfContents;
    const tableOfContentsEl = ""
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app





// # <Your-Project-Title>

// ## Description
    // Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    // - What was your motivation?
    // - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    // - What problem does it solve?
    // - What did you learn?

// ## Table of Contents (Optional)
    // If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

// ## Installation
    // What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage
    // Provide instructions and examples for use. Include screenshots as needed.
    // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    //     ```md
    //     ![alt text](assets/images/screenshot.png)
    //     ```

// ## Credits
    // List your collaborators, if any, with links to their GitHub profiles.
    // If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    // If you followed tutorials, include links to those here as well.

// ## License
    // The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    // ---
    // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.



// render license table of contents
function license(badge) {
    licenseUrl = (badge === "") ? ` `: `
    - [License](#license)
    `
    return licenseToc
}

// render license block
function generateLicenseBlock(data) {
    licenseBlock =( badge === "") ? ` `: `
    ## License
    ${data}
    `
    return licenseBlock
}
// ## Badges
    // ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    // Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// function to grab badge URL
function generateBadge() {
    switch (data) {
        case data = "Mozilla Pulic License 2.0":
            badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
        case data = "Boost Software Licence 1.0":
            badge = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
            break;
        case data = "MIT License":
            badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;
        case data = "Apache License 2.0":
            badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
            break;
        case data = "No License":
            badge = "";
            break;
    }
}
        // 'Mozilla Public License','Boost Software License 1.0','MIT License', 'Apache License 2.0', 'The Unlicense'
// ## Features
    // If your project has a lot of features, list them here.

// ## How to Contribute
    // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests
    // Go the extra mile and write tests for your application. Then provide examples on how to run them here.