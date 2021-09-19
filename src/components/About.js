import './About.css';

function About() {
  return (
    <div className="About">
      <h3 id="about">
        A little about me
        <a href="#about">
          <svg aria-hidden="true" height="16" width="16">
            <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </a>
      </h3>
      <div id="aboutContent">
        I'm Cameron, a Software Engineer who, after over a year of study, is
        ready to contribute to the world. I have always had an interest in
        technology, but it wasn't until I discovered programming that I found my
        passion. Going from nothing to full stack knowledge has been an exciting
        journey, one that is only just beginning.
      </div>
    </div>
  );
}

export default About;
