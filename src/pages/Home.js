import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Keranjang, ListCategories, Produk } from "../components/Index";
import axios from "axios";
import { API_URL } from "../utils/Constants";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      selectedCategory: "Makanan",
      keranjangs: [],
    };
  }

  componentDidMount() {
    this.getMenus(this.state.selectedCategory);
    this.getKeranjangs();
  }

  // componentDidUpdate(prevState) {
  //   if (this.state.keranjangs !== prevState.keranjangs) {
  //     // this.getKeranjangs();
  //   }
  // }

  getMenus = (category) => {
    axios
      .get(API_URL + "products?category.nama=" + category)
      .then((res) => {
        this.setState({
          menus: res.data,
        });
      })
      .catch((error) => console.log(error));
  };

  getKeranjangs = () => {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        this.setState({
          keranjangs: res.data,
        });
      })
      .catch((error) => console.log(error));
  };

  handleChangeCategory = (val) => {
    this.setState({ selectedCategory: val });
    this.getMenus(val);
  };

  handleAddToCart = (val) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + val.id)
      .then((res) => {
        if (res.data.length === 0) {
          let cart = {
            jumlah: 1,
            total_harga: val.harga,
            product: val,
          };
          axios
            .post(API_URL + "keranjangs", cart)
            .then((res) => {
              this.getKeranjangs();
              swal({
                title: "Berhasil",
                text: val.nama + " berhasil ditambahkan",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => console.log(error));
        } else {
          let cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + val.harga,
            product: val,
          };
          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, cart)
            .then((res) => {
              this.getKeranjangs();
              swal({
                title: "Berhasil",
                text: val.nama + " berhasil ditambahkan",
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { menus, keranjangs } = this.state;
    return (
      <div>
        <Container fluid className="mt-3">
          <Row>
            <ListCategories
              handleChangeCategory={this.handleChangeCategory}
              selectedCategory={this.state.selectedCategory}
            />
            <Col>
              <h5>Menu</h5>
              <hr />
              <Row className="overflow-auto produk">
                {menus.map((menu) => (
                  <Produk
                    menu={menu}
                    key={menu.id}
                    handleAddToCart={this.handleAddToCart}
                  />
                ))}
              </Row>
            </Col>
            <Keranjang
              keranjangs={keranjangs}
              {...this.props}
              getKeranjangs={this.getKeranjangs}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
