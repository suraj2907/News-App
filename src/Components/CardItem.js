import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg,
} from "reactstrap";

const CardItem = ({ article }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={article.image} />
      <CardBody>
        <CardTitle style={{ fontWeight: "bold" }}>
          <span style={{ color: "red" }}>TITLE : </span>

          {article.title}
        </CardTitle>
        <CardText className="secondary">
          <span style={{ fontWeight: "bold" }}> Description : </span>{" "}
          {article.description}
          <a href={article.content}> Read More...</a>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CardItem;
