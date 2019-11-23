import React, { useEffect, useState } from "react";
import axios from "axios";
import { WarsCard, NextButton } from "./WarsCard";
import { Container, Row } from "reactstrap";


export default function WarsList() {
const [personArray, setPersonArray] = useState([]);
const [nextArray, SetNextArray] = useState(['https://swapi.co/api/people/?page=1']);
const [nextTrigger, SetNextTrigger] = useState(0);


const nextPage = e => {
if (nextArray == null) {
    SetNextArray('https://swapi.co/api/people/?page=1')
}
    SetNextTrigger(nextTrigger+1)
    console.log(nextArray);
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


const didUpdate = () => {
axios
    .get(nextArray)
    .then(response => {
    
    // var personCount = response.data.count;
    // console.log(personCount);

    setPersonArray(response.data.results);
    SetNextArray(response.data.next);

    console.log(response.data);


    })
    .catch(error => console.log(error));
};


useEffect(didUpdate, [nextTrigger]);

return (
<Container >
    <Row>
        { personArray.map(item => {
        return <WarsCard name={item.name} height={item.height} key={item.url} 
        mass={item.mass} hair_color={item.hair_color} />;
        })} 
    </Row>
    <NextButton nextLog={nextPage} />
</Container>    
)};