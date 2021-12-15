import React from 'react';
import Buttonx from "../../shared/Button";
import confusedMan from '../../../Assets/png/IMAGE 1.png'


const Path = () => {
    return (
        <div className="path container ">
            <div className="path-content flex-column">
                <h1 className="path-heading mr-bt-md">
                    مسیرتو مشخص کن
                </h1>
                <p className="path-paragraph mr-bt-auto">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است
                    چاپگرها و متون بلکه  یک روزنامه و مجله در ستون
                    و سطر آنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                    از صنعت چاپ و با استفاده از طراحان گرافیک است
                </p>
                <Buttonx classes="path-button">
                    مشاهده ویدئو
                </Buttonx>
            </div>
            <div className="path-image">
                <img src={confusedMan} alt="man" className="path-img"/>
            </div>
        </div>
    );
};

export default Path;