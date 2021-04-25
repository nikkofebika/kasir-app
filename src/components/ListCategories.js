import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/Constants";

export default class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch(API_URL + "categories")
      .then((response) => response.json())
      .then((res) => this.setState({ categories: res }));
  }

  render() {
    const { handleChangeCategory, selectedCategory } = this.props;
    return (
      <Col md={2}>
        <h5>Kategori</h5>
        <hr />
        <ListGroup>
          {this.state.categories.map((c) => (
            <ListGroup.Item
              key={c.id}
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeCategory(c.nama)}
              className={selectedCategory === c.nama && "active-nav"}
            >
              <i className={c.icon}></i> {c.nama}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    );
  }
}
