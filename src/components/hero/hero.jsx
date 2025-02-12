import hero_img from "../../assets/hero.svg";
import "./hero.css";
import { Button } from "../btns/button";

export const Hero = () => {
    return (
        <div className="container">
            <div className="hero__block">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Bring everyone together to build better products.
                    </h1>
                    <p className="hero__sub_title">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <Button />
                </div>
                <div className="hero__img">
                    <img src={hero_img} alt="hero" />
                </div>
            </div>
        </div>
    );
};
