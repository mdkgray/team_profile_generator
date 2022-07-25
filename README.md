# Team Profile Generator

### By Mackenzie Gray

## Technologies Used

- JavaScript
- CSS
- HTML 
- Node.js (Inquirer and Jest npm packages)

## Description 

The motivation for this project was to create a command line application that displays the information of a work team's basic information in a HTML file. Using question prompts in the terminal, information such as email address and GitHub profiles can be generated and clicked to send an email or view the GitHib profile.  

## Installation 

The application will be invoked using the following command:

`node index.js`

## Testing

Testing with Jest will be invoked using the following command:

`npm test`

## Outline of codebase writing

JavaScript:
- Writing of Employee, Manager, Engineer and Intern classes with constructor functions and functions specific to the class.
- Writing of tests for the Employee, Manager, Engineer and Intern classes.
- Writing the HTML template file with associated functions to take data from command line input and insert into the template.
- Linking of class files, HTML template file and index.js file.
- Linking of the index.js file to the Inquirer package.
- Linking of the index.js file to the Node.js fs module.
- Writing of function to validate user input in the command line.
- Writing function to include the array of questions to be shown in the command-line application through Inquirer module.
- Writing of function to initialize the application and then use data to generate the HTML file.

CSS:
- Styling of the generated HTML file using Bootstrap and CSS.

HTML:
- Writing of HTML structure to be used in html_template.js file.
- Writing of cards for specific roles to be generated based on user input in the command-line application.

Node.js:
- Installation of Inquirer npm package.
- Installation of Jest npm package.
- Testing using the Jest npm package.

## Demonstration video

[Click here to view the video]()