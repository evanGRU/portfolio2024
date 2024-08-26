import './App.css';
import Header from "./components/header/Header";
import HeroContent from "./components/heroContent/heroContent";
import Projects from "./components/project/projects";
import {DisplayModeProvider} from "./contexts/displayModeContext";
import Footer from "./components/footer/footer";

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

                <section id="contact" className="flex">
                    <h1>Faisons connaissance</h1>
                    <a href="mailto:evangruchot.pro@gmail.com">
                        Contactez-moi</a>
                </section>
            </main>

            <Footer></Footer>
        </div>
    );
}

export default App;
