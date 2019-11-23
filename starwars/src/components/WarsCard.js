import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader, Col, Button
  } from 'reactstrap';



export const WarsCard = props => {
  return (
    <div className="people-list">
        <Col>
            <Card>
                <CardImg 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/320px-Star_Wars_Logo.svg.png' alt='swLogo' />
                <CardHeader>Name: {props.name}</CardHeader>
                <CardBody>
                    <CardText>Height: {props.height} </CardText>
                    <CardText>Mass: {props.mass} </CardText>
                    <CardText>Hair Color: {props.hair_color} </CardText>
                </CardBody>
            </Card>
        </Col>
      </div>
  );
};

export const NextButton = props => {
    return (
        <div className="people-list">
            <Button onClick={props.nextLog}>NEXT LIST OF CHARACTERS</Button>
        </div>
    );
};

