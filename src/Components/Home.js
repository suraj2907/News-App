import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "reactstrap";
import axios from "axios";
import { faker } from "@faker-js/faker";
import CardItem from "./CardItem";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const API_KEY = "b2270c3079594605a4fcd2e69445591e";

const Home = ({ category }) => {
  const [article, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const { search } = useParams();

  const fetchData = async () => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
    if (category) {
      apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${API_KEY}`;
    }
    if (search) {
      apiUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;
    }
    apiUrl += `&page=${page}`;

    console.log("api", apiUrl);
    try {
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
    } catch (error) {
      console.error("Error fetching data:", error);
      setArticles([]); // Clear articles in case of an error
    }
  };

  useEffect(() => {
    const fetchDataAndResetArticles = async () => {
      await fetchData();
      window.scrollTo(0, 0);
    };

    fetchDataAndResetArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, page]);

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
      <div class="d-flex justify-content-around m-3">
        <button
          type="button"
          class="btn btn-dark "
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          type="button"
          class="btn btn-dark"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={article.length === 0}
        >
          Next
        </button>
      </div>
    </Container>
  );
};
Home.propTypes = {
  category: PropTypes.string,
  page: PropTypes.number,
  search: PropTypes.string,
};

export default Home;
