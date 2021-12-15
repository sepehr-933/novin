import React from 'react';
import './static/app.scss'
import Header from "./components/layout/Header";
import Path from "./components/layout/Path";
import support from '../src/Assets/png/icon support.png'
import Ways from "./components/layout/Ways";
import Consult from "./components/layout/Consult";
import Comments from "./components/layout/Comments";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/layout/Footer";


const App = () => {
  return (
      <div className="app">
         <Header />
         <Path />
         <div className="path-support">
             <img src={support} alt="support" className="support-img"/>
         </div>
          <Ways />
          <Consult />
          <Comments />
          <Footer />
      </div>
  );
};
export default App;