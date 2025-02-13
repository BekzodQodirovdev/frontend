import React from "react";
import "./hero-top.css";
export const HeroTop = () => {
    return (
        <section className="hero_top">
            <div className="container">
                <ul className="hero_top__list">
                    <li className="hero_top__item">Аудиокитоб</li>
                    <li className="hero_top__item">Электрон китоблар</li>
                    <li className="hero_top__item">Босма китоблар</li>
                    <li className="hero_top__item">Контакт</li>
                    <li className="hero_top__item">Биз хақимизда</li>
                </ul>
            </div>
        </section>
    );
};
