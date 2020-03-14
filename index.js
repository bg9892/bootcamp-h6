const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short discription of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of locense should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        ddefault: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo'
    }
];

function init() {
    inquirer.prompt(questions).then(function (response) {
        const { username, title, description, license, installation, usage, contributing } = response;
        const inquirerArray = { username, title, description, license, installation, usage, contributing };
        const queryUrl = `https://api.github.com/users/${username}`;

        axios
            .get(queryUrl)
            .then(function (respone) {
                const data = respone.data;
                const readmeData = generateMarkdown(data, inquirerArray);

                fs.writeFile("README.md", readmeData, err => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Success!");
                });
            })
    })
};

init();
