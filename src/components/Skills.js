import './Skills.css';

function Skills() {
  return (
    <div className="Skills">
      <div>Skills</div>
      <div className="skillType">
        Frontend
        <div className="skillItem">JavaScript, React, etc</div>
        <img src="../assets/pugjs.png"></img>
      </div>
      <div className="skillType">
        Backend
        <div className="skillItem">Node, Express, etc</div>
      </div>
      <div className="skillType">
        Misc
        <div className="skillItem">Webpack, Git, NPM, etc</div>
      </div>
    </div>
  );
}

export default Skills;
