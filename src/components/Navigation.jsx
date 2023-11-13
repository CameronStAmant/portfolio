import './Navigation.css';

function Navigation() {
  return (
    <ul id="navigation">
      <li>
        <a href="#about">About me</a>
      </li>
      <li>
        {' '}
        <a href="#skills">Skills</a>
      </li>
      <li>
        {' '}
        <a href="#projects">Projects</a>
      </li>
      <li>
        {' '}
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;
