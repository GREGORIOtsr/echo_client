import React from "react";
import iconURL from '../../../../assets/top.png';

const BackToTop = () => {

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  };

  return (
    <button id="backToTop" onClick={scrollToTop}><img src={iconURL} alt="Back to top icon" /></button>
  );
};

export default BackToTop;
