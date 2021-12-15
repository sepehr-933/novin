import React from 'react';
import image from '../../../Assets/png/IMAGE 2.png';
import user from '../../../Assets/png/icon user.png';
import phone from '../../../Assets/png/icon phone.png';
import Buttonx from "../../shared/Button";

const Consult = () => {
    return (
        <div className="consult ">
            <div className="container consult-container">
                <img src={image} alt="thinking boy" className="consult-image"/>
                <div className="consult-content">
                    <h1 className="consult-heading mr-bt-md">
                        به مشاوره نیاز داری ؟
                    </h1>
                    <p className="consult-paragraph mr-bt-bg">
                        <p>فرم زیر رو پر کن،</p>
                        <p>کارشناسانمون در اسرع وقت باهات تماس میگیرند.</p>
                    </p>
                    <div>
                        <div className="consult-fullName">
                            <div className="consult-img__container">
                                <img src={user} alt="user" className="consult-img"/>
                            </div>
                            <input placeholder="نام و نام خانوادگی" className="consult-input"/>
                        </div>
                        <div className="consult-phone">
                            <div className="consult-img__container">
                                <img src={phone} alt="user" className="consult-img-2"/>
                            </div>
                            <input placeholder="شماره تلفن" className="consult-input"/>
                        </div>
                        <Buttonx classes="consult-button">
                            ارسال
                        </Buttonx>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Consult;