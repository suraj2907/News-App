import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "reactstrap";
import axios from "axios";
import { faker } from "@faker-js/faker";
import CardItem from "./CardItem";
import PropTypes from "prop-types";

const API_KEY = "e32dd4989b6746cf9d679864e8612ad7";

const Home = ({ category }) => {
  const [article, setArticles] = useState([]);

  const fetchData = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    if (category) {
      apiUrl += `&category=${category}`;
    }
    // if (searchTerm) {
    //   apiUrl += `&q=${searchTerm}`;
    // }

    const { data } = await axios.get(apiUrl);
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
      author: article.author,
      category: article.category,
    }));

    console.log(allArticles);
    setArticles(allArticles);
  };

  useEffect(() => {
    const fetchDataAndResetArticles = async () => {
      await fetchData();
    };

    fetchDataAndResetArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <Container
      fluid
      style={{ padding: "10px", margin: "0 2rem ", overflow: "hidden" }}
    >
      <Row>
        {article &&
          article.map((article) => (
            <Col md={4} key={article.id}>
              <CardItem article={article} />
            </Col>
          ))}
      </Row>
      {/* <div class="d-flex justify-content-around m-3">
        <button type="button" class="btn btn-dark ">
          Dark
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
      </div> */}
    </Container>
  );
};
Home.propTypes = {
  category: PropTypes.string,
  page: PropTypes.number,
  searchTerm: PropTypes.string,
};

export default Home;
