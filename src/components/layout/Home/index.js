import React from 'react';
import Path from "./Path";
import support from "../../../Assets/png/icon support.png";
import Ways from "./Ways";
import Consult from "./Consult";
import Comments from "./Comments";

const Home = () => {
    return (
        <div className="home">
            <Path />
            <div className="path-support">
                <img src={support} alt="support" className="support-img"/>
            </div>
            <Ways />
            <Consult />
            <Comments />
        </div>
    );
};

export default Home;