import './Skills.css';
import mongoose from '../assets/mongoose-logo.webp';
import pugjs from '../assets/pugjsLogo.svg';

function Skills() {
  return (
    <div className="Skills">
      <h3 id="skills">
        Skills
        <a href="#skills">
          <svg aria-hidden="true" height="16" width="16">
            <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </a>
      </h3>
      <div id="skillList">
        <div>
          <div className="skillItem">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
              alt="TypeScript logo"
            />            
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="Jest logo"
            />
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" 
              alt='Redux logo'
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
              alt="Sass logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
              alt="CSS logo"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-plain.svg"
              alt="Storybook logo"
            />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
