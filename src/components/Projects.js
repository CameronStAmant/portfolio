import './Projects.css';
import blogScreenshot from '../assets/blogScreenshot.png';
import battleshipScreenshot from '../assets/battleship-screenshot.png';
import membersOnlyScreenshot from '../assets/members-only-screenshot.png';

import React, { useState } from 'react';

function Projects() {
  const [gallery, setGallery] = useState(1);

  const next = () => {
    if (gallery === 3) {
      setGallery(1);
    } else {
      setGallery(() => gallery + 1);
    }
  };

  const previous = () => {
    if (gallery === 1) {
      setGallery(3);
    } else {
      setGallery(() => gallery - 1);
    }
  };

  return (
    <div className="projects">
      Projects
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
      <div>
        {gallery === 1 && (
          <div>
            <h2>Blog</h2>
            <img src={blogScreenshot} alt="Screenshot of blog" />
            <p>
              Fully featured blog that allows posting, comments, as well as
              moderation from admins.
            </p>
          </div>
        )}
        {gallery === 2 && (
          <div>
            <h2>Battleship</h2>
            <img src={battleshipScreenshot} alt="Screenshot of battleship" />
            <p>The game of battleship that you can take on the go!</p>
          </div>
        )}
        {gallery === 3 && (
          <div>
            <h2>Members Only Message Board</h2>
            <img
              src={membersOnlyScreenshot}
              alt="Screenshot of members only message board"
            />
            <p>
              A secret message board where only members know who wrote what.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
