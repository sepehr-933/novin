import React,{useState} from 'react';
import logo from '../../../Assets/png/logo.png'
import Buttonx from "../../shared/Button";
import search from '../../../Assets/png/icon search.png'

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuItems = [
        {item: "صفحه اصلی"},
        {item: "همکاری با ما"},
        {item: "دانشجویان برتر"},
        {item: "ارتباظ با ما"},
        {item: "درباره ما"},
    ];
    const handleClick = idx => {
        setActiveIndex(idx);
    }
    return (
        <div className="header">
            <div className="container flex header-container mr-bt-md">
                <img src={logo} alt="logo" className="header-logo mr-lf-xs"/>
                <h1 className="header-heading text-primary">
                    آموزش
                </h1>
                <h1 className="header-heading text-secondary mr-lf-auto">
                    نوین
                </h1>
                <p className="header-blue text-primary mr-lf-xs">
                    ورود
                </p>
                <span className="narrow-line"></span>
                <p className="header-blue text-primary mr-rt-xs">
                    ثبت نام
                </p>
            </div>
            <div className="container flex header-container">
                {
                    menuItems.map((items, i) => {
                        return (
                            <Buttonx index={i} handleClick={handleClick} classes="mr-lf-sm" text={i !== activeIndex ? true : false}  key={items.item}>
                                {items.item}
                            </Buttonx>
                        )
                    })
                }
                <img src={search} alt="search" className="header-search mr-rt-auto"/>
                <input placeholder="چی میخوای یاد بگیری..." className="header-input"/>
            </div>
        </div>
    );
};
export default Header;