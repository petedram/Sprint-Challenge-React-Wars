import React, { useEffect, useState } from "react";
import axios from "axios";
import WarsCard from "./WarsCard";
import { Container, Row } from "reactstrap";


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
        
        // var personCount = response.data.count;
        // console.log(personCount);

        setPersonArray(response.data.results);
        console.log(response.data);


      })
      .catch(error => console.log(error));
  };
  useEffect(didUpdate, []);

  return (
    <Container>
        <Row>

        { personArray.map(item => {
        return <WarsCard name={item.name} height={item.height} key={item.url} />;
      })} 
        </Row>
    </Container>

      
    //   {<WarsCard addOne={addOne} />

      

  );
  
}