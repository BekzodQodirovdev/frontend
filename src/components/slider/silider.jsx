import { Button } from "../btns/button";
import { Card } from "./card";
import cardImg from "../../assets/Oval.png";
import "./slider.css";

export const Slider = () => {
    return (
        <div className="container">
            <div className="slider__box">
                <h2 className="slider__title">What they’ve said</h2>
                <div className="slider__card">
                    <Card
                        imgUrl={cardImg}
                        title={"Anisha Li"}
                        subTitle={
                            "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
                        }
                    />
                    <Card
                        imgUrl={cardImg}
                        title={"Anisha Li"}
                        subTitle={
                            "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
                        }
                    />
                </div>
                <Button />
            </div>
        </div>
    );
};
