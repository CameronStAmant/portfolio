import './Name.css';
import profilePicture from '../assets/profilePicture.png';

function Name() {
  return (
    <div className="Name">
      <div id="name">Cameron St. Amant</div>
      <div id="title">Full Stack Software Engineer</div>
      <img id="profilePicture" src={profilePicture} alt="Profile picture" />
    </div>
  );
}

export default Name;
