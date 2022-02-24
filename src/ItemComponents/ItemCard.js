import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import { Redirect, useParams } from "react-router-dom";



function ItemCard({ item }) {

    const [isLoading, setIsLoading] = useState(false);
    // const [item, setItem] = useState([]);


  
    // useEffect(function getCompanyAndJobs() {
    //   async function getCompany() {
    //     setJobs(companyRes.jobs)
    //     setCompany(company)
    //     setIsLoading(false);
    //   }
    //   getCompany()
    // }, [c]);

    let logoUrl

    if (item.imgUrl != null){
        logoUrl = `http://`
    }
    
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-12" className="ItemCard">
        <Card>
          <CardBody className="col-md-12 ">
          <img src={logoUrl} className="position-absolute top-5 end-5 float-right ml-5"/>

            <CardTitle className="font-weight-bold text-center">
              <b>{item.name}</b>
              <br/>
            </CardTitle>
            <CardText>
              {item.name}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default ItemCard;