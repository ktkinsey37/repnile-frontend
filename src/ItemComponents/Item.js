import React, { useEffect, useState, useContext } from "react";
import RepnileApi from "../api";
import { useParams } from "react-router-dom";
import UserContext from "../UserContext";

function Item() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  const user = useContext(UserContext);

  useEffect(() => {
    async function getItem() {
      let item = await RepnileApi.getItem(id);
      // should i do parents here?
      console.log(item, "this is animal in  getanimalonload");
      setItem(item);
      setIsLoading(false);
    }
    getItem();
  }, [id]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // return (
  //   <section className="col-md-4">
  //     <Card>
  //       <CardBody>
  //         <CardTitle className="font-weight-bold text-center">
  //           {item.name}

  return <div></div>;
}

export default Item;
