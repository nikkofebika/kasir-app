import React, { Component } from "react";
import axios from "axios";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { API_URL, numberWithCommas } from "../utils/Constants";
import ModalKeranjang from "./ModalKeranjang";
import swal from "sweetalert";

class Keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      keranjangDetail: false,
      keterangan: "",
      jumlah: 0,
      totalHargaPerItem: 0,
    };
  }

  submitBayar = (totalBayar) => {
    let pesanan = {
      total_bayar: totalBayar,
      menus: this.props.keranjangs,
    };

    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        this.props.history.push("/success");
      })
      .catch((err) => console.log(err));
  };

  handleUpdateKeranjang = (e) => {
    e.preventDefault();
    let data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHargaPerItem,
      keterangan: this.state.keterangan,
      product: this.state.keranjangDetail.product,
    };
    axios
      .put(API_URL + "keranjangs/" + this.state.keranjangDetail.id, data)
      .then((res) => {
        this.handleCloseModal();
        this.props.getKeranjangs();
        swal({
          title: "Berhasil",
          text:
            "Pesanan " +
            this.state.keranjangDetail.product.nama +
            " berhasil diupdate",
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  handleDeleteKeranjang = (id) => {
    axios
      .delete(API_URL + "keranjangs/" + id)
      .then((res) => {
        this.handleCloseModal();
        this.props.getKeranjangs();
        swal({
          title: "Berhasil",
          text:
            "Pesanan " +
            this.state.keranjangDetail.product.nama +
            " berhasil dihapus",
          icon: "success",
          button: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  handleShowModal = (menuKeranjang) => {
    this.setState({
      showModal: true,
      keranjangDetail: menuKeranjang,
      jumlah: menuKeranjang.jumlah,
      totalHargaPerItem: menuKeranjang.total_harga,
      keterangan: menuKeranjang.keterangan,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleChangeJumlah = (type) => {
    if (type === "add") {
      this.setState({
        jumlah: this.state.jumlah + 1,
        totalHargaPerItem:
          this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
      });
    } else {
      if (this.state.jumlah !== 1) {
        this.setState({
          jumlah: this.state.jumlah - 1,
          totalHargaPerItem:
            this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
        });
      }
    }
  };

  handleChangeKeterangan = (e) => {
    this.setState({ keterangan: e.target.value });
  };

  render() {
    let totalBayar = this.props.keranjangs.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.total_harga;
    },
    0);
    return (
      <Col md={3}>
        <h5>Keranjang</h5>
        <hr />
        <Card className="overflow-auto keranjang">
          <ListGroup variant="flush">
            {this.props.keranjangs.map((cart) => {
              return (
                <ListGroup.Item
                  key={cart.id}
                  onClick={() => this.handleShowModal(cart)}
                >
                  <Row>
                    <Col xs={2}>
                      <Badge pill variant="success">
                        {cart.jumlah}
                      </Badge>
                    </Col>
                    <Col>
                      <h6>{cart.product.nama}</h6>
                      <p>Rp. {numberWithCommas(cart.product.harga)}</p>
                    </Col>
                    <Col>
                      <p className="float-right">
                        Rp. {numberWithCommas(cart.total_harga)}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
            <ModalKeranjang
              {...this.state}
              handleCloseModal={this.handleCloseModal}
              handleChangeJumlah={this.handleChangeJumlah}
              handleChangeKeterangan={this.handleChangeKeterangan}
              handleUpdateKeranjang={this.handleUpdateKeranjang}
              handleDeleteKeranjang={this.handleDeleteKeranjang}
            />
          </ListGroup>
        </Card>

        {/* Web */}
        <Row className="d-none d-md-block fixed-bottom">
          <Col md={{ span: 3, offset: 9 }} className="mb-2 px-4">
            <h5>
              Total Belanja :
              <strong className="float-right">
                <span>Rp. {numberWithCommas(totalBayar)}</span>
              </strong>
            </h5>
            <Button
              variant="warning"
              block
              className="text-white"
              onClick={() => this.submitBayar(totalBayar)}
            >
              <strong>
                <i className="fa fa-shopping-cart"></i> Checkout
              </strong>
            </Button>
          </Col>
        </Row>

        {/* Mobile */}
        <Row className="d-sm-block d-md-none">
          <Col md={{ span: 3, offset: 9 }} className="mb-2 px-4">
            <h5>
              Total Belanja :
              <strong className="float-right">
                <span>Rp. {numberWithCommas(totalBayar)}</span>
              </strong>
            </h5>
            <Button
              variant="warning"
              block
              className="text-white"
              onClick={() => this.submitBayar(totalBayar)}
            >
              <strong>
                <i className="fa fa-shopping-cart"></i> Checkout
              </strong>
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Keranjang;
