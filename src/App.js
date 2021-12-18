import React from 'react';
import './static/app.scss'
import Header from "./components/layout/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

const App = () => {
  return (
      <div className="app">
          <Header />
          <Home />
          <Footer />
      </div>
  );
};
export default App;