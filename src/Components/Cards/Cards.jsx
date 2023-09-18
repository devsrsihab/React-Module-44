import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
  // define price state
  const [prices, setPrices] = useState([]);
  // define a useeffect
  useEffect(() => {
    const getPrices = async () => {
      try {
        const data = await axios.get("./Api/Pricing.js");
        setPrices(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPrices();
  }, []);
  console.log(prices);

  return (
    <>
    <div className="card-parent grid gap-4
    sm:grid-cols-2  md:grid-cols-3
    ">

    
    {
        prices.map((price,index) => <Card key={index} price={price} ></Card> )
    }  
    </div>  
    </>
    ) 
};

export default Cards;
