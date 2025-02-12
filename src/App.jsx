import "./App.css";
import { About } from "./components/about/about";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Slider } from "./components/slider/silider";
import { Start } from "./components/starts/start";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Slider />
            <Start />
        </>
    );
}

export default App;
