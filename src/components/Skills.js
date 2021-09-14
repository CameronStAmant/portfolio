import './Skills.css';
import mongoose from '../assets/mongoose-logo.webp';
import pugjs from '../assets/pugjs-logo.svg';

function Skills() {
  return (
    <div className="Skills">
      <div id="skills">Skills</div>
      <div className="skillType">
        Frontend
        <div className="skillItem">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5 logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3 logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="Sass logo"
          />
          <img src={pugjs} alt="Pugjs logo" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            alt="Tailwind CSS logo"
          />
        </div>
      </div>
      <div className="skillType">
        Backend
        <div className="skillItem">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Nodejs logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
            alt="Express logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongdoDB logo"
          />
          <img src={mongoose} alt="Mongoose ODM logo" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase logo"
          />
        </div>
      </div>
      <div className="skillType">
        Misc
        <div className="skillItem">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
            alt="Webpack logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="npm logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
