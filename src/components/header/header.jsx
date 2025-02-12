import header__logo from "../../assets/logo.svg";
import header__logo_next from "../../assets/logo_next.svg";
import { Button } from "../btns/button";
import "./header.css";
export const Header = () => {
    return (
        <div className="container">
            <div className="header__block">
                <a className="header__logo_block" href="#">
                    <img src={header__logo} alt="logo" />
                    <img src={header__logo_next} alt="logo" />
                </a>
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#">Pricing</a>
                    </li>
                    <li className="header__item">
                        <a href="#">Product</a>
                    </li>
                    <li className="header__item">
                        <a href="#">About Us</a>
                    </li>
                    <li className="header__item">
                        <a href="#">Careers</a>
                    </li>
                    <li className="header__item">
                        <a href="#">Community</a>
                    </li>
                </ul>
                <Button />
            </div>
        </div>
    );
};
