import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";



function About({ }) {

  return (
    <div className="col-md-12 offset-md-2">
    <br/>
    <section className="col-md-10">
      <Card style={{ width: '60rem' }}>
        <CardBody className="col-md-12 ">
          <CardTitle className="font-weight-bold text-center">
            <h2>About</h2>
          </CardTitle>
  
          <Card>
          <h4>
          Origin Story
          </h4>


          Animals are my passion. They have been ever since I was a kid. I followed that passion all the way to Veterinary School and then started my herp journey with my first Corn Snake, Scarlett. After Scar, I got my first crested gecko, Fawkes. I found that I wanted more and more babies and ultimately realized that if I wanted to have babies, I'd have to sell them too.

          <br/>
          <br/>
          So here I am, 2 years deep into this excellent hobby and looking forward to many many more. 
          
          <br/>
          <br/>
          <h6>
          Core Values
          </h6>
          
          </Card>

        </CardBody>
      </Card>
    </section>
    </div>
  );
}

// The above can go inside of list group

export default About;
