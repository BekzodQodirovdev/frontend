import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import uzcard from "../../assets/uzcard.png";
import humo from "../../assets/humo.png";

import playmarketImg from "../../assets/playmarket.png"
import appstoreImg from "../../assets/appstore.png"
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <section className="footer_top">
                <div className="container">
                    <div className="footer_top__block">
                        <ul className="footer_top_list">
                            <li className="footer_top_item-bold"><a href="#">Платформа хақида</a></li>
                            <li className="footer_top_item"><a href="#">Liber ўзи нима?</a></li>
                            <li className="footer_top_item"><a href="#">Фойдаланиш шартлари</a></li>
                            <li className="footer_top_item"><a href="#">Ёрдам</a></li>
                        </ul>
                        <ul className="footer_top_list">
                            <li className="footer_top_item-bold"><a href="#">Обуна хақида</a></li>
                            <li className="footer_top_item"><a href="#">Обуна бўлиш</a></li>
                            <li className="footer_top_item"><a href="#">Қандай тўлаш</a></li>
                        </ul>
                        <ul className="footer_top_list">
                            <li className="footer_top_item-bold"><a href="#">Китоблар</a></li>
                            <li className="footer_top_item"><a href="#">Аудио китоблар</a></li>
                            <li className="footer_top_item"><a href="#">Электрон китоблар</a></li>
                            <li className="footer_top_item"><a href="#">Китоблар</a></li>
                        </ul>
                        <ul className="footer_top_list">
                            <li className="footer_top_item-bold"><a href="#">Мобил илова</a></li>
                            <li className="footer_top_item"><a href="#"><img className="footer_top_img" src={playmarketImg} alt="img" /></a></li>
                            <li className="footer_top_item"><a href="#"><img className="footer_top_img" src={appstoreImg} alt="img" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="footer_bottom">
                <div className="container">
                    <div className="footer_bottom__block">
                        <div className="footer_bottom__item">
                            <p className="footer_bottom__item_network">Ижтимоий тармоқлар</p>
                            <div className="networks">
                                <FaFacebook color="white" size="24px" />
                                <FaYoutube color="white" size="24px" />
                                <AiOutlineTikTok color="white" size="24px" />
                                <FaTelegram color="white" size="24px" />
                                <FaInstagram color="white" size="24px" />
                            </div>
                        </div>
                        <div className="footer_bottom__item">
                            <p className="footer_bottom__item_network">Боғланиш</p>
                            <div className="footer_bottom__contact">
                                <p className="footer_bottom_phone">+998 90 253 77 53</p>
                                <p className="footer_bottom_email">support@liber.uz</p>
                            </div>
                        </div>
                        <div className="footer_bottom__item">
                            <p className="footer_bottom__item_network">Биз қабул қиламиз</p>
                            <div className="footer_bottom__img_box">
                                <img className="payed__img" src={uzcard} alt="uzkard" />
                                <img className="payed__img" src={humo} alt="humo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
