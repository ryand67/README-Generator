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

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Lisence

  ${data.lisence}

  ## Tests 

  ${data.tests}
  `;
  }
  
  module.exports = {
      generateMarkdown: generateMarkdown
  }