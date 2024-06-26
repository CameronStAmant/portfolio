import './Contact.css';
import resume from '../assets/Cameron-St-Amant-Resume.pdf';

function Contact() {
  return (
    <div className="Contact">
      <h3 id="contact">
        Let's work together!
        <a href="#contact">
          <svg aria-hidden="true" height="16" width="16">
            <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
          </svg>
        </a>
      </h3>
      <div>
        <a href="mailto:contact@cameronstamant.com?subject=I found your portfolio and I like what I see">
          Email
        </a>
      </div>
      <div>
        <a href={resume} download>
          Resume
        </a>
      </div>
      <div>
        <a href="https://github.com/CameronStAmant">GitHub</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/cameron-stamant">LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
