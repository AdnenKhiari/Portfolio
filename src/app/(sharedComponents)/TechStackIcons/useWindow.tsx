"use client"

import { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function getWindowDimensions() {
    if(typeof window !== "undefined"){
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }else{
      return {
        width: null,
        height: null
      };
    }
  
  }
  
  