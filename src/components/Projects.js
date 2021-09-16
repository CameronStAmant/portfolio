import './Projects.css';
import blogScreenshot from '../assets/blogScreenshot.png';
import battleshipScreenshot from '../assets/battleship-screenshot.png';
import membersOnlyScreenshot from '../assets/members-only-screenshot.png';

function Projects() {
  return (
    <div className="projects">
      <div id="projects">
        <div>Some of my work</div>
      </div>
      <div>
        <div className="project">
          <h2 className="projectTitle">Blog</h2>
          <div>
            <img src={blogScreenshot} alt="Screenshot of blog" />
          </div>
          <div className="front">
            <p>
              Fully featured blog that allows posting, comments, as well as
              moderation from admins.
            </p>
            <div className="projectButtons">
              <a
                href="https://github.com/CameronStAmant/blog-api-client"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="code">See GitHub</button>
              </a>
              <a
                href="https://cameronstamant.github.io/blog-api-client/#/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="live">See Project</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <h2 className="projectTitle">Battleship</h2>
            <img src={battleshipScreenshot} alt="Screenshot of battleship" />
            <div className="front">
              <p>The game of battleship that you can take on the go!</p>
              <div className="projectButtons">
                <a
                  href="https://github.com/CameronStAmant/battleship"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="code">See GitHub</button>
                </a>
                <a
                  href="https://cameronstamant.github.io/battleship/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="live">See Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div>
            <h2 className="projectTitle">Members Only Message Board</h2>
            <img
              src={membersOnlyScreenshot}
              alt="Screenshot of members only message board"
            />
            <div className="front">
              <p>
                A secret message board where only members know who wrote what.
              </p>
              <div className="projectButtons">
                <a
                  href="https://github.com/CameronStAmant/members-only-node"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="code">See GitHub</button>
                </a>
                <a
                  href="https://secure-oasis-30404.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="live">See Project</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
