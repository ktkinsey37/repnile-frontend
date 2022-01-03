import React, {useEffect, useState} from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
import RepnileApi from "../api";
import { Redirect, useParams } from "react-router-dom";



function AnimalCard({ animal }) {

    const [isLoading, setIsLoading] = useState(false);
    // const [company, setCompany] = useState([]);
    // const [jobs, setJobs] = useState([]);


  
    // useEffect(function getCompanyAndJobs() {
    //   async function getCompany() {
    //     let companyRes = await JoblyApi.getCompany(company);
    //     setJobs(companyRes.jobs)
    //     setCompany(company)
    //     setIsLoading(false);
    //   }
    //   getCompany()
    // }, [c]);

    let logoUrl

    // if (animal.imgUrl != null){
    //     logoUrl = `http://joelburton-jobly.surge.sh/${company.logoUrl}`
    // }
    
  
    if (isLoading) {
      return <p>Loading &hellip;</p>;
    }
  
    return (
      <section className="col-md-12" className="AnimalCard">
        <Card>
          <CardBody className="col-md-12 ">
          <img src={logoUrl} className="position-absolute top-5 end-5 float-right ml-5"/>

            <CardTitle className="font-weight-bold text-center">
              <b>{animal.name}</b>
              <br/>
            </CardTitle>
            <CardText>
              {animal.species}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
  
  export default AnimalCard;