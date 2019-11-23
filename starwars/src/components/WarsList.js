import React, { useEffect, useState } from "react";
import axios from "axios";
import WarsCard from "./WarsCard";


export default function WarsList() {
const [personArray, setPersonArray] = useState([]);

// const [getUrl, setGetUrl] = useState([]);

    // example function
    // const addOne = e => {
    //     setDayParam(dayParam + 1);
    //     console.log(dayParam);
    // };


  const didUpdate = () => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {

        console.log(response);
        
        var personCount = response.data.count;
        console.log(personCount);

        setPersonArray(response.data.results);


      })
      .catch(error => console.log(error));
  };
  useEffect(didUpdate, []);

  return (
    <div className="person-card">

        { personArray.map(item => {
        return <WarsCard name={item.name} height={item.height} key={item.url} />;
      })} 

    </div>

      
    //   {<WarsCard addOne={addOne} />

      

  );
  
}