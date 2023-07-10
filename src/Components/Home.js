import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card, CardBody, CardTitle } from "reactstrap";
import axios from "axios";
import { faker } from "@faker-js/faker";
import CardItem from "./CardItem";

const API_KEY = "7674ccdcae814ff29828039e4b8a9b64";
const URL = "https://newsapi.org/v2/top-headlines?country=in";

const Home = () => {
  const [article, setArticles] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { articles } = data;
    console.log(articles);
    const allArticles = articles.map((article) => ({
      title: article.title,
      source: article.source,
      image: article.urlToImage,
      id: faker.string.uuid(),
      description: article.description,
      publishedAt: article.publishedAt,
      content: article.url,
    }));

    console.log(allArticles);
    setArticles(allArticles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid style={{padding:"10px", margin:
    "0 20px 0 20px"}}>
      <Row>
        {article.map((article) => (
          <Col md={3} key={article.id}>
            <CardItem article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
