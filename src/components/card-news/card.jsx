import "./card.css";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import { CardComp } from "./card-component";
import card_img1 from "../../assets/card_img1.jpg";

export const Card = () => {
    return (
        <section className="card">
            <div className="container">
                <div className="card__title_box">
                    <h2 className="card__main_title">Янги қўшилганлар</h2>
                    <div class="card__pagination">
                        <button class="arrow">
                            <img src={left} alt="left btn img" />
                        </button>
                        <div class="dots">
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <button class="arrow">
                            <img src={right} alt="right btn img" />
                        </button>
                    </div>
                </div>
                <div className="card__news">
                    <CardComp
                        img={card_img1}
                        title="Код 8"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={3}
                    />
                    <CardComp
                        img={card_img1}
                        title="Код 8"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={3}
                    />
                    <CardComp
                        img={card_img1}
                        title="Код 8"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={3}
                    />
                    <CardComp
                        img={card_img1}
                        title="Код 8"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={3}
                    />
                    <CardComp
                        img={card_img1}
                        title="Код 8"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={3}
                    />
                </div>
            </div>
        </section>
    );
};
