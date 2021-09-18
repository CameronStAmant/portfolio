import './Name.css';
import Navigation from './Navigation';
import profilePicture from '../assets/profilePicture.png';

function Name() {
  return (
    <div className="Name">
      <Navigation />
      <div id="name">Cameron St. Amant</div>
      <div id="title">Full Stack Software Engineer</div>
      <img id="profilePicture" src={profilePicture} alt="Profile" />
    </div>
  );
}

export default Name;
