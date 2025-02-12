export const Card = ({ imgUrl, title, subTitle }) => {
    return (
        <div className="card__box">
            <div className="card_img_box"><img src={imgUrl} alt="img" /></div>
            <div className="card__content">
                <h4 className="card__title">{title}</h4>
                <p className="card__sub_title">{subTitle}</p>
            </div>
        </div>
    );
};
