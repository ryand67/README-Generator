function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Lisence](#lisence)
  * [Tests](#tests)

  ## Installation

  To install, run this command in the terminal:
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Lisence

  ${data.lisence}

  ## Tests 

  ${data.tests}

  ## GitHub Link

  https://www.github.com/${data.gitUserName}

  <img src="https://img.shields.io/github/followers/${data.gitUserName}?label=Follow&style=social">
  `;
  }
  
  module.exports = {
      generateMarkdown: generateMarkdown
  }