import './Projects.css';
import blogScreenshot from '../assets/blogScreenshot.png';
import battleshipScreenshot from '../assets/battleship-screenshot.png';
import membersOnlyScreenshot from '../assets/members-only-screenshot.png';

function Projects() {
  return (
    <div className="projects">
      Projects
      <div>
        <div>
          <h2>Blog</h2>
          <img src={blogScreenshot} alt="Screenshot of blog" />
          <p>
            Fully featured blog that allows posting, comments, as well as
            moderation from admins.
          </p>
        </div>
        <div>
          <h2>Battleship</h2>
          <img src={battleshipScreenshot} alt="Screenshot of battleship" />
          <p>The game of battleship that you can take on the go!</p>
        </div>
        <div>
          <h2>Members Only Message Board</h2>
          <img
            src={membersOnlyScreenshot}
            alt="Screenshot of members only message board"
          />
          <p>A secret message board where only members know who wrote what.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
