import "./about.css";

export const AboutFn = ({ btn_number, title, sub_title }) => {
    return (
        <div className="about__fn_box">
            <button className="about__fn_btn">{btn_number}</button>
            <div className="box">
                <h3 className="about_fn_title">{title}</h3>
                <p className="about_fn_sub_title">{sub_title}</p>
            </div>
        </div>
    );
};
