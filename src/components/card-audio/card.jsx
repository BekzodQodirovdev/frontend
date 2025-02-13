import "./card.css";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import { CardComp } from "../card-news/card-component";
import card_audio from "../../assets/card_audio.jpg";

export const CardAudio = () => {
    return (
        <section className="card">
            <div className="container">
                <div className="card__title_box">
                    <h2 className="card__main_title">Аудио китоблар</h2>
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
                        img={card_audio}
                        title="1984"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={1}
                    />
                    <CardComp
                        img={card_audio}
                        title="1984"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={1}
                    />
                    <CardComp
                        img={card_audio}
                        title="1984"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={1}
                    />
                    <CardComp
                        img={card_audio}
                        title="1984"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={1}
                    />
                    <CardComp
                        img={card_audio}
                        title="1984"
                        sub_title="SIYOSAT, FANTASTIKA"
                        star="4.7"
                        hugsNum={1}
                    />
                </div>
            </div>
        </section>
    );
};
