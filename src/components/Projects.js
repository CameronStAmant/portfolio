import './Projects.css';
import blogScreenshot from '../assets/blogScreenshot.png';
import bbsiJobs from '../assets/bbsiJobs.png';
import membersOnlyScreenshot from '../assets/members-only-screenshot.png';

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
            Freelanced a job board web app from start to ship while
            collaborating with a UX designer. I have increased my knowledge of
            React, cross-browser compatibility, and external packages.
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
        <div className="listProject listProjectFlip spacer">
          <h2 className="projectTitle" id="blogTitle">
            Blog
          </h2>
          <img
            src={blogScreenshot}
            className="projectImage"
            alt="Screenshot of blog"
          />
          <p className="projectSummary">
            A fully featured blog that allows posts, comments, as well as
            moderation from admins. The backend was built with APIs that deliver
            content to the two React frontends. Even further behind the scenes
            we have MongoDB, which houses all of the user and content data.
          </p>
          <div className="projectButtons" id="blogButtons">
            <a
              href="https://github.com/CameronStAmant/blog-api-client"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="githubLink">Review the code</button>
            </a>
            <a
              href="https://cameronstamant.github.io/blog-api-client/#/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="demoLink">See it live!</button>
            </a>
          </div>
        </div>
        <div className="listProject spacer">
          <h2 className="projectTitle" id="members-only-message-board">
            Members Only Message Board
          </h2>
          <img
            src={membersOnlyScreenshot}
            className="projectImage"
            id="projectImageFlip"
            alt="Screenshot of members only message board"
          />
          <p className="projectSummary">
            A full stack message board with multiple user roles, complete with
            conditional rendering to only allow users to see the entire message
            if they are logged in. Passwords are encrypted with bcryptjs and
            user input is sanitized and validated using express-validator.
          </p>
          <div className="projectButtons">
            <a
              href="https://github.com/CameronStAmant/members-only-node"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="githubLink">Review the code</button>
            </a>
            <a
              href="https://secure-oasis-30404.herokuapp.com/"
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
