import React from 'react'

const Buttonx = ({children, text,classes, handleClick,index}) => {
  return (
      <div
          onClick={() => handleClick(index)}
          style={{background:text && "transparent", color:text && "#063bbc"}} className={`${classes} buttonx`}>
          {children}
      </div>
  );
};
export default Buttonx;