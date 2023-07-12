import React from "react";
import "../App.css";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Col,
} from "reactstrap";

const CardItem = ({ article }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg
        top
        height="250"
        width="100%"
        src={
          article.image
            ? article.image
            : "https://vectorified.com/images/news-app-icon-23.png"
        }
      />
      <CardBody>
        <CardTitle style={{ fontWeight: "bold" }}>
          <span style={{ color: "red" }}>TITLE : </span>

          {article.title}
        </CardTitle>
        <Col>
          <CardText>
            <span style={{ fontWeight: "bold" }}>Author: </span>{" "}
            {article.author ? article.author : ""}
          </CardText>
        </Col>
        <CardText className="secondary">
          <span style={{ fontWeight: "bold" }}> Description : </span>{" "}
          {article.description}
        </CardText>
        <Button color="warning">
          <a href={article.content} className="read-more">
            {" "}
            Read More
          </a>
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardItem;
