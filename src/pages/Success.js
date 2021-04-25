import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/Constants";

export default class Success extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        res.data.map((k) => {
          axios
            .delete(API_URL + "keranjangs/" + k.id)
            .then((hasil) => console.log(hasil));
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <center className="mt-5">
        <h3>Terimakasih sudah belanja :)</h3>
        <img src="assets/images/success_thanks.svg" width="300" />
        <br />
        <br />
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </center>
    );
  }
}
