import './App.css';
import Header from "./components/header/Header";
import HeroContent from "./components/heroContent/heroContent";
import Projects from "./components/projectsElement/projects";

function App() {
  return (
      <div>
          <Header></Header>
          <main className="flex">
              <div className="hero-bg"></div>
              <HeroContent></HeroContent>
          </main>

          <Projects></Projects>
      </div>
  );
}

export default App;
