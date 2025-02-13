import logo from "../../assets/logo.png";
import searchSvg from "../../assets/search.svg";
import "./header.css";

export const Header = () => {
    return (
        <div className="header__bock">
            <img src={logo} alt="logo" />
            <div className="header__search">
                <select id="header__options">
                    <option value="ruklar">Рукнлар</option>
                    <option value="roptions">options</option>
                </select>
                <span className="header__search_box">
                    <input
                        className="header__search_input"
                        type="text"
                        placeholder="Қидириш"
                    />
                    <button className="header__search_btn">
                        <img src={searchSvg} alt="search" />
                    </button>
                </span>
            </div>
            <div className="header__btns_block">
                <select id="header__lang">
                    <option value="kr">Ўз</option>
                    <option value="ru">RU</option>
                    <option value="eng">ENG</option>
                    <option value="uz">UZ</option>
                </select>
                <button className="header__login_btn">Кириш</button>
            </div>
        </div>
    );
};
