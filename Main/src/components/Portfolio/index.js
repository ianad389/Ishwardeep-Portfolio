import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'NFL-Calculator',
      description: 'NFL live updates',
      link: "https://ianad389.github.io/UCBCS_FFCalculator/index.html",
      repo: "https://github.com/ianad389/UCBCS_FFCalculator"
    },
    {
      name: 'Safespace',
      description: 'Free to post whatever you want!',
      link: "https://the-safer-space.herokuapp.com/",
      repo: "https://github.com/ianad389/UCBC_SafeSpace"
    },
    
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
