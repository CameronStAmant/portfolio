import './Name.css';
import Navigation from './Navigation';
import profilePicture from '../assets/profilePicture.png';

function Name() {
  return (
    <div className="Intro">
      <Navigation />
      <div className="Name">
        <div id="name">Cameron St. Amant</div>
        <div id="title">Full Stack Software Engineer</div>
        <img id="profilePicture" src={profilePicture} alt="Profile" />
      </div>
    </div>
  );
}

export default Name;
