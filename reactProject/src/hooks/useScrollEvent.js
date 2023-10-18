import React from 'react'
import { useState,useEffect } from 'react'

export const useScrollEvent = () => {
  const [scrollnum,setscrollnum]= useState(0);
  

    useEffect(()=>{
      setTimeout(()=>{const onScroll = ()=>{
        setscrollnum(window.pageYOffset)
        }
        window.addEventListener('scroll',onScroll)
        onScroll()
        return()=> window.removeEventListener('scroll',onScroll)},1000)
    
  },[])  
  return scrollnum
}
