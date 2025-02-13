import { CardAudio } from "./components/card-audio/card";
import { Card } from "./components/card-news/card";
import { HeroTop } from "./components/hero-top/hero-top";
import { HeroSlider } from "./components/slider-hero/hero";
import { MainLayout } from "./layout/main-layout";

function App() {
    return (
        <MainLayout>
            <HeroTop />
            <HeroSlider />
            <Card />
            <CardAudio />
        </MainLayout>
    );
}

export default App;
