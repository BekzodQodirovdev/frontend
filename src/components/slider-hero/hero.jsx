import React from "react";
import slider from "../../assets/slider.png";
import "./hero.css";

export const HeroSlider = () => {
    return (
        <section className="slider">
            <div className="container">
                <h2 className="slider__title">Рукнлар</h2>
                <div className="slider_block">
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                    <div className="slider__item">
                        <img className="slider__item_img" src={slider} alt="img" />
                        <h3 className="slider__sub_title">Жахон адабиёти</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};
