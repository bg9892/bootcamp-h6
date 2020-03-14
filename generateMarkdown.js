function generateMarkdown(data, inquirerArray) {
  let badge;
  if (data.email === null) {
    badge = `[![Generic badge](https://img.shields.io/badge/Contact_at-<email_not_provided>-<COLOR>.svg)](https://shields.io/)`
  } else {
    badge = `[![Generic badge](https://img.shields.io/badge/Contact_at-${data.email}-<COLOR>.svg)](https://shields.io/)`
  }
  return `
# ${inquirerArray.title}
## Created by: ${data.login}

<img src="${data.avatar_url}" height="150px" />

${badge}
## Index
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribuitng](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)
<a name="description"></a>
### Description
${inquirerArray.description}
<a name="installation"></a>
### Installation
${inquirerArray.installation}
<a name="usage"></a>
### Usage
${inquirerArray.usage}
<a name="license"></a>
### License
This repo is protected under ${inquirerArray.license} licensing.
<a name="contributing"></a>
### Contributing
${inquirerArray.contributing}
### Tests
<a name="tests"></a>
${inquirerArray.tests}
### Questions
<a name="questions"></a>
${inquirerArray.questions}
`;
}

module.exports = generateMarkdown;
