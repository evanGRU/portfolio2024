import './header.css';

function Header() {
  return (
      <header>
          <img src="img/logo.svg" alt="logo" />
          <nav className="flex">
              <a href="#projects">Projets</a>
              <a href="#about">À propos</a>
              <a href="#contact">Contact</a>
          </nav>
      </header>
  );
}

export default Header;
