import './App.css';
import Header from "./components/header/Header";
import HeroContent from "./components/heroContent/heroContent";
import Projects from "./components/project/projects";
import {DisplayModeProvider} from "./contexts/displayModeContext";

function App() {
    return (
        <div>
            <Header></Header>
            <main className="flex">
                <div className="hero-bg"></div>
                <HeroContent></HeroContent>
                <DisplayModeProvider>
                    <Projects></Projects>
                </DisplayModeProvider>
            </main>
        </div>
    );
}

export default App;
