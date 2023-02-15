import { useState, useEffect } from "react";
import { FOOD_API, IMG_CDN_URL } from "../Header/utils/constants";
const Carousel = ()=>{
    useEffect(() =>{
        getData();
      },[]
      )
      const [user1,setUser1]=useState([]);
      async function getData(){
        const data = await fetch(FOOD_API);
        const json = await data.json();
        setUser1(json?.data?.cards[0]?.data?.data?.cards)
      }
      
  if (!user1) return null;
    return(
        <>
        {user1?.map(e=> {return <img className="carousel-img" src={IMG_CDN_URL + e.data.creativeId} />})}<br/>
        
        </>
    )
}

export default Carousel;