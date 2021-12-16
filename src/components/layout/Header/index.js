import React,{useState,useEffect} from 'react';
import logo from '../../../Assets/png/logo.png'
import Buttonx from "../../shared/Button";
import search from '../../../Assets/png/icon search.png';
import Animated from "react-mount-animation";

const Header = ({background}) => {
    const [showMenu, setShowMenu] = useState(false);
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
    useEffect(() => {
        document.body.addEventListener('click', () => {
            setShowMenu(false);
        })
    })
    const onHandleClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    return (
        <div
            style={{background: background && `url(${background})`}}
            className="header"
        >
            <Animated.div
                show={showMenu}
                mountAnim={` 
                 0% {opacity: 0}
                 100% {opacity: 1}
               `}
                unmountAnim={`
                    0% {opacity: 1}
                    100% {opacity: 0}
                `}
                unmountDelay={0.3}
                className="cover"></Animated.div>

            <Animated.div
                onClick={(e) => e.stopPropagation()}
                className="header-responsive"
                show={showMenu}
                mountAnim={` 
                 0% {width: 0}
                 80% {width: 80vw}
                 100% {width: 70vw}
               `}
                unmountAnim={`
                 0% {left:0}
                 100% {left:-500px}
                `}
                time={0.6}
                delay={0.3}
            >
                <div className="flex mr-bt-md">
                    <p className="header-blue text-primary mr-lf-xs">
                        ورود
                    </p>
                    <span className="narrow-line"></span>
                    <p className="header-blue text-primary mr-rt-xs">
                        ثبت نام
                    </p>
                </div>

                    {
                        menuItems.map((items, i) => {
                            return (
                                <Buttonx index={i} handleClick={handleClick} classes="mr-lf-sm mr-bt-md" text={i !== activeIndex ? true : false}  key={items.item}>
                                    {items.item}
                                </Buttonx>
                            )
                        })
                    }
                    <div className="flex mr-rt-lg">
                        <img src={search} alt="search" className="header-search mr-rt-auto"/>
                        <input placeholder="چی میخوای یاد بگیری..." className="header-input"/>
                    </div>
            </Animated.div>
            <div className="menu-wrapper">
                <div onClick={(e) => onHandleClick(e)}
                     className={`${showMenu ? 'ham-menu2' : 'ham-menu'}`}
                ></div>
            </div>
            <div className="container flex header-container mr-bt-md">
                <img src={logo} alt="logo" className="header-logo mr-lf-xs"/>
                <h1 className="header-heading text-primary">
                    آموزش
                </h1>
                <h1 className="header-heading text-secondary mr-lf-auto">
                    نوین
                </h1>
                <div className="flex header-display">
                    <p className="header-blue text-primary mr-lf-xs">
                        ورود
                    </p>
                    <span className="narrow-line"></span>
                    <p className="header-blue text-primary mr-rt-xs">
                        ثبت نام
                    </p>
                </div>
            </div>
            <div className="container flex header-container header-display">
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