import './Projects.css';
import bbsiJobs from '../assets/bbsiJobs.png';
function Projects() {
  return (
    <div className="projects" id="projects">
      <h3 id="projectOpening">
        Some of my work
        <a href="#projects">
          <svg aria-hidden="true" height="16" width="16">
            <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </a>
      </h3>
      <div id="projectGallery">
        <div className="listProject">
          <h2 className="projectTitle" id="BBSIJobs">
            BBSIJobs.com
          </h2>
          <img
            src={bbsiJobs}
            className="projectImage"
            alt="Screenshot of BBSIJobs.com"
          />
          <p className="projectSummary">
            Independently developed a job board web application from inception to completion, collaborating closely with a UX designer throughout the process. This partnership enabled the creation of more intricate and cohesive components. Through this project, I enhanced my expertise in React, cross-browser compatibility, CSS, and integrating external packages.
          </p>
          <div className="projectButtons">
            <a
              href="https://bbsijobs.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="demoLink">See it live!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
