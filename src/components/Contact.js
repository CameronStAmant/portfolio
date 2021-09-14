import './Contact.css';
import resume from '../assets/Cameron-St-Amant-Resume.pdf';

function Contact() {
  return (
    <div className="Contact">
      <div id="contact">Contact</div>
      <div>
        <a href="mailto:cameronstamant@protonmail.com?subject=I found your portfolio and I really like what I see">
          cameronstamant@protonmail.com
        </a>
      </div>
      <div>
        <a href="https://github.com/CameronStAmant">Github</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/cameron-stamant">LinkedIn</a>
      </div>
      <div>
        <a href={resume} download>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
