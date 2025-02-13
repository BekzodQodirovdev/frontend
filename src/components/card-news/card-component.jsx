import "./card-omponent.css";
import vector1 from "../../assets/vector1.svg";
import vector2 from "../../assets/vector2.svg";
import starImg from "../../assets/star.svg";

export const CardComp = ({ img, title, sub_title, star, hugsNum }) => {
    return (
        <div className="card_comp__box">
            <img src={img} alt="img" />
            <h3 className="card_comp__title">{title}</h3>
            <p className="card_comp__sub_title">{sub_title}</p>
            <div className="card_comp__status_box">
                <div className="card_comp__star">
                    <img src={starImg} alt="star img" />
                    <p>{star}</p>
                </div>
                <div className="card_comp_hugs">
                    {hugsNum == 1 ? (
                        <img src={vector1} alt="svg" />
                    ) : hugsNum == 2 ? (
                        <img src={vector2} alt="book svg" />
                    ) : (
                        <>
                            <img src={vector1} alt="svg" />
                            <img src={vector2} alt="book svg" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
