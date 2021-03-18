// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    // https://img.shields.io/badge/License-IPL%201.0-blue.svg
    return `![github license]https://img.shields.io/badge/License-${license}-blue.svg`
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  * [table of contents](#table-of-contents)
  * [installation](#installation)
  * [description](#description)
  * [usage](#usage)
      *[contribution](#contribution)
  ## installation \n ${data.installation}

  ## description \n ${data.description}

  ## usage \n ${data.usage}

  ## contribution\n ${data.contribution}

  <small><i>If you have anyquestions vist my github<a href='https://github.com/ScottLRay/Readme-generator'>Scott Ray</a> or email me at ... </i></small>
`;
}

module.exports = generateMarkdown;
