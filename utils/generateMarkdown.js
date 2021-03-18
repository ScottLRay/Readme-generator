// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "IBM"){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }if (license === "WTFPL"){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  }return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    
    return `* [License](#license)`
  }return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License 
    
    This priject is licensed under the ${license} license`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  


* [table of contents](#table-of-contents)
${renderLicenseLink(data.license)}
* [installation](#installation)
* [description](#description)
* [usage](#usage)
*[contribution](#contribution)

${renderLicenseSection(data.license)}

  ## installation
  \`\`\`
   ${data.installation}
  \`\`\`
  ## description \n ${data.description}

  ## usage \n ${data.usage}

  ## contribution\n ${data.contribution}

  <small><i>If you have anyquestions vist my github<a href='${data.userName}'></a> or email me at ${data.eMail} </i></small>
`;
}

module.exports = generateMarkdown;
