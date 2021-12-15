import React from 'react';
import Slider from "react-slick";
import Cardx from "./Cardx";
import arrow from '../../../Assets/png/icons8-collapse-arrow-25.png'

const Comments = () => {
    //hypothetical api
    const users = [
        {name:"علی تقوی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"مصطفی مرادی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"سهراب داوودی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"میثم ابراهیمی", grade:"دانشجوی برتر متخصص موبایل شو", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
    ];
    const companies = [
        {name:"برترینها", grade:"فعال در حوزه خبر", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"نوآوران", grade:"فعال در حوزه برنامه نویسی وب", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"موبایل سازان", grade:"فعال در حوزه تعمیرات موبایل", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
        {name:"صفاهان گستر", grade:"قعال در حوزه طراحی گرافیک", comment:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه  یک روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"},
    ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="comments container">
            <h1 className="comments-heading">
                نظرات دانشجویان برتر
            </h1>
            <p className="comments-paragraph mr-bt-lg">
                تا کنون ۲۵,۵۸۲ نفر از آموزش های ما  استفاده کرده اند .
            </p>
            <div className="mr-bt-lg">
                <Slider {...settings}>
                    {
                        users.map((user, i) => {
                            return (
                                <Cardx username={user.name} key={i} userGrade={user.grade}>
                                    {user.comment}
                                </Cardx>
                            )
                        })
                    }
                </Slider>
            </div>
            <h1 className="comments-heading">
                نظرات شرکت‌ها درباره دانشجویان ما
            </h1>
            <p className="comments-paragraph mr-bt-lg">
                تا کنون ۲۵,۵۸۲ نفر از دانشجویان ما در شرکت های داخلی و خارجی مشغول به کار شده اند.
            </p>
            <div className="mr-bt-lg">
                <Slider {...settings}>
                    {
                        companies.map((user, i) => {
                            return (
                                <Cardx username={user.name} key={i} userGrade={user.grade}>
                                    {user.comment}
                                </Cardx>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};
export default Comments;
const arrowStyles = {
    display: "block",
    background: "#ff7840",
    padding:"1rem",
    width:"max-content",
    height:"max-content",
    borderRadius:"50%",
    opacity:"1"
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, ...arrowStyles, transform:"translate(-1.2rem,-4.8rem)"}}
            onClick={onClick}
        >
            <img src={arrow} alt="arrow" className="next-arrow"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style,...arrowStyles,transform:"translate(1.2rem,-4.8rem)",zIndex:"3" }}
            onClick={onClick}
        >
            <img src={arrow} alt="arrow" className="prev-arrow"/>
        </div>
    );
}
