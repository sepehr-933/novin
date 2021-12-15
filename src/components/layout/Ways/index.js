import React from 'react';
import line from '../../../Assets/png/lines.png';
import backend from '../../../Assets/png/back end.png';
import frontend from '../../../Assets/png/front end.png';
import mobile from '../../../Assets/png/mobile.png';
import Buttonx from "../../shared/Button";

const Ways = () => {
  return (
      <div className="ways container ">
          <h1 className="ways-topic flex">
              <p className="text-secondary mr-lf-xs">
                  فقط
              </p>
              <p className="text-primary__dark mr-bt-md">
                  یکی از مسیرهای زیر رو انتخاب کن
              </p>
          </h1>
          <div className="ways-lines mr-bt-md">
              <img src={line} alt="lines" className="ways-line"/>
          </div>
          <div className="ways-choices">
              <div className="ways-card">
                  <img src={backend} alt="backend" className="ways-backend mr-bt-sm"/>
                  <Buttonx>
                      متخصص backend شو
                  </Buttonx>
              </div>
              <div className="ways-card">
                  <img src={mobile} alt="backend" className="ways-mobile mr-bt-sm"/>
                  <Buttonx>
                      متخصص mobile شو
                  </Buttonx>
              </div>
              <div className="ways-card">
                  <img src={frontend} alt="backend" className="ways-frontend mr-bt-sm"/>
                  <Buttonx>
                      متخصص frontend شو
                  </Buttonx>
              </div>
          </div>
      </div>
  );
};

export default Ways;