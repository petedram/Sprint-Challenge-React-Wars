import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardHeader, Col
  } from 'reactstrap';



const WarsCard = props => {
  return (
    <div className="people-list">
        <Col>
        <Card>
            <CardHeader>Name: {props.name}</CardHeader>
                <CardBody>
                    <CardText>Height: {props.height} </CardText>
                </CardBody>
            </Card>
        </Col>
      </div>
  );
};

export default WarsCard;