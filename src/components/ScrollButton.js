import React, { useState } from "react";
import RocketIcon from '@mui/icons-material/Rocket';
import { Button } from "react-bootstrap";
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <React.Fragment>
            <RocketIcon onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} 
            size="normal"/>
       </React.Fragment>
    );
  }
    
  export default ScrollButton;