import { CategoryCard } from "./components/card/category-card/category-card";
import { ProductCard } from "./components/card/product-card/product-card";
import { category, rukunlarData, newsData, audioData } from "./data/data";
import { MainLayout } from "./layout/main-layout";
import React from "react";
import { RukunlarCard } from "./components/card/rukunlar-card/rukunlar-card";
import sliderImg from "./assets/slider.svg";
import { NewsCard } from "./components/card/news-card/news-card";

function App() {
    return (
        <>
            <MainLayout>
                <section className="border border-[#f0f0f0]">
                    <div className="container">
                        <ul className="flex gap-[20px] text-primary font-[600] py-[12px]">
                            <li>
                                <a href="#">Аудиокитоб</a>
                            </li>
                            <li>
                                <a href="#">Электрон китоблар</a>
                            </li>
                            <li>
                                <a href="#">Босма китоблар</a>
                            </li>
                            <li>
                                <a href="#">Контакт</a>
                            </li>
                            <li>
                                <a href="#">Биз хақимизда</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="pb-[40px]">
                    <div className="container">
                        <div className="flex justify-between py-[26px]">
                            {category.map((item) => (
                                <CategoryCard
                                    id={item.id}
                                    logo={item.logo}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h2 className="text-[32px] pb-[32px]">Рукнлар</h2>
                        <div className="flex h-[164px] gap-[16px]">
                            {rukunlarData.map((item) => (
                                <RukunlarCard
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-[64px]">
                    <div className="container">
                        <div className="flex justify-between pb-[32px]">
                            <h2 className="text-[32px]">Янги қўшилганлар</h2>
                            <img src={sliderImg} alt="img" />
                        </div>
                        <div className="flex justify-between">
                            {newsData.map((item) => (
                                <NewsCard
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                    icons={item.icons}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-[64px]">
                    <div className="container">
                        <div className="flex justify-between pb-[32px]">
                            <h2 className="text-[32px]">Аудио китоблар</h2>
                            <img src={sliderImg} alt="img" />
                        </div>
                        <div className="flex justify-between">
                            {audioData.map((item) => (
                                <NewsCard
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}
                                    sub_title={item.sub_title}
                                    icons={item.icons}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    );
}

export default App;
