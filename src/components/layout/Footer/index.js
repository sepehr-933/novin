import React,{useState, useEffect} from 'react';
import logo from "../../../Assets/png/logo.png";
import mobile from '../../../Assets/png/icon mobile.png';
import atsign from '../../../Assets/png/@.png'
import Buttonx from "../../shared/Button";
//social icons
import whatsapp from '../../../Assets/png/whatsapp.png'
import telegram from '../../../Assets/png/telegram.png'
import twitter from '../../../Assets/png/twitter.png'
import linkedin from '../../../Assets/png/linkedin.png'
import instagram from '../../../Assets/png/insta.png'

const Footer = () => {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
        setWindowSize(window.innerWidth);
    });
    return (
        <div className="footer">
            <div className="container">
                <div className="aligned-flex mr-bt-sm">
                    <img src={logo} alt="logo" className="header-logo mr-lf-xs"/>
                    <h1 className="header-heading text-primary">
                        آموزش
                    </h1>
                    <h1 className="header-heading text-secondary mr-lf-auto">
                        نوین
                    </h1>
                </div>
                <p className="text-primary footer-paragraph mr-bt-lg">
                    از قدیمی‌ترین وب‌سایت‌های یادگیری آنلاین است که توانسته طی بیش از ده سال فعالیت خود بالغ بر ۱۳۰۰۰ ساعت آموزش ویدیویی در قالب فراتر از ۲۰۰۰ع
                    عنوان علمی، مهارتی و کاربردی را منتشر کند و به بزرگترین پلتفرم آموزشی ایران مبدل شود.
                </p>
                <div className='flex footer-form mr-bt-lg'>
                    <div className="footer-parts1 flex">
                        <div className="footer-icon__container footer-icon__mobile">
                            <img src={mobile} alt="mobile" className="footer-mobile "/>
                        </div>
                        <input style={{borderRadius:"0 8px 8px 0"}} className="consult-input footer-input" placeholder="شماره موبایل شما"/>
                    </div>
                    <div className=""></div>
                    <div className="footer-parts2 flex">
                        <div className="footer-icon__container footer-icon__atsign">
                            <img src={atsign} alt="atsign" className="footer-atsign "/>
                        </div>
                        <input style={{borderRadius:"0 0 0 0"}} className="consult-input footer-input" placeholder="ایمیل شما"/>
                    </div>
                    <Buttonx classes={`${windowSize > 580 ? "footer-button" : "footer-button__responsive"}`}>
                        عضویت در خبرنامه
                    </Buttonx>
                </div>
                <div className="flex footer-content">
                    <div className="footer-links">
                        <h2 className="footer-heading text-primary mr-bt-sm">
                            لینک های مفید
                        </h2>
                            <ul className="footer-container">
                                <li className="text-primary footer-list">
                                    مقالات
                                </li>
                                <li className="text-primary footer-list">
                                    تماس با ما
                                </li>
                                <li className="text-primary footer-list">
                                    وبلاگ
                                </li>
                                <li className="text-primary footer-list">
                                    درباره ما
                                </li>
                                <li className="text-primary footer-list">
                                    همکاری با ما
                                </li>
                                <li className="text-primary footer-list">
                                    نمونه کارهای دانشجویان
                                </li>
                            </ul>
                    </div>
                    <div className="footer-social">
                        <h2 className="footer-heading text-primary mr-bt-md">
                            با ما همراه باشید...
                        </h2>
                        <div className="flex">
                            <img src={whatsapp} alt="whatsapp" className="footer-socials "/>
                            <img src={linkedin} alt="linkedin" className="footer-socials "/>
                            <img src={telegram} alt="telegram" className="footer-socials "/>
                            <img src={twitter} alt="twitter" className="footer-socials "/>
                            <img src={instagram} alt="instagram" className="footer-socials "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;