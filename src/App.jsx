import { Hero } from "./components/hero";
import { Novinki } from "./components/novinki";
import { data } from "./data/data";
import { MainLayout } from "./layout/main-layout";

function App() {
    return (
        <>
            <MainLayout>
                <Hero />
                <Novinki title="Новинка" data={data} />
                <Novinki title="Скидки" data={data} />
            </MainLayout>
        </>
    );
}

export default App;
