import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import image0 from "../Images/image0.jpeg"
import "./TermsOfService.css"




function TermsOfService({ }) {

  return (
    <div className="col-md-12 offset-md-1">
    <br/>
    <section className="col-md-10">
      <Card className="tosCard" style={{ width: '90rem'}}>
        <CardBody className="col-md-12">
          <CardTitle className="font-weight-bold text-center tosCardText">
            <h2>Terms of Service</h2>
          </CardTitle>
  
          <CardTitle className="tosCardText">
          <h4 className="font-weight-bold text-center">
          Return and Refund
          </h4>

          <b>
          Animals are final purchase unless we have discussed a trade plan. Dropped tails anytime after purchase including during transit does not change anything about the quality of the animal and in no way warrants a refund. All animals are guaranteed live on arrival. Should your animal not make the journey, I require photo and video evidence of pick up time and condition of the gecko within 1 hour of pick up or the guarantee is void. If you have completed the appropriate steps and your animal did not make the trip, you are eligible for store credit up to the full value of your gecko before any applied discounts. Should you choose an animal as a replacement you will be responsible for the shipping cost.
          
          </b>

          
          <br/>
          
          <h4 className="font-weight-bold text-center">
          Shipping
          </h4>
          
          
          <b>
          
          Shipping is at the expense of the purchaser and a flat $55 unless there is a promotion. <br/>
          
          Once payment has been received you can schedule to have your Crested Gecko(s) shipped by contacting me at dina.raibrahim@gmail.com. I ship via FedEx Priority Overnight. Shipping days are Monday-Wednesday and I will only ship your Crested Gecko when day and nighttime temperatures are between 50 and 80 degrees at both locations. If weather conditions do not permit shipping I will hold onto your Crested Gecko at no additional charge until conditions improve. In most cases your shipment will arrive by 10:30am but if you live in a remote area, delivery could be later in the day. <br/><br/>
          
          Always make sure to double check the shipping information you provide when ordering from me. In addition to your address I require your email and daytime phone number. This information is required for FedEx Live Animal Shipments. If a wrong shipping address is provided the live arrival guarantee is void. <br/><br/>
          
          I can ship to a FedEx staffed office or hub if that is your preference. It is your responsibility to make sure they will accept live animal shipments beforehand. FedEx Office & Print and FedEx Kinkos locations WILL NOT accept live animal shipments. Geckos delivered to a FedEx office need to be picked up within (1) hour of delivery. If the package gets rejected by your FedEx office or you fail to pick up your gecko(s) within (1) hour of delivery my live arrival guarantee is void and you will not be eligible for store credit. <br/><br/>
          
          It is imperative that someone will be there to receive the shipment at the time of the first delivery attempt. I cannot guarantee live animal delivery when the gecko has been trucked around on the back of a hot or cold UPS truck all day! I also do not offer net terms. All orders must be paid in full before I will ship. <br/><br/>
          
          These terms of service are updated as of 2/1/2021 by RepNile Exotics
          
          </b>
          </CardTitle>

        </CardBody>
      </Card>
    </section>
    </div>
  );
}

// The above can go inside of list group

export default TermsOfService;
