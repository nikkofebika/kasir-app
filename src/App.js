import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ListCategories from './components/ListCategories'
import Keranjang from './components/Keranjang'
import NavbarComponent from './components/NavbarComponent'
import axios from 'axios'
import { API_URL } from './utils/Constants'
import Produk from './components/Produk'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
      selectedCategory: 'Makanan'
    }
  }

  componentDidMount() {
    this.getMenus(this.state.selectedCategory)
  }

  getMenus = (category) => {
    axios.get(API_URL + "products?category.nama=" + category).then(res => {
      this.setState({
        menus: res.data
      })
    }).catch(error => console.log(error))
  }

  handleChangeCategory = (val) => {
    this.setState({ selectedCategory: val })
    this.getMenus(val)
  }

  render() {
    const { menus } = this.state
    return (
      <div>
        <NavbarComponent />
        <Container fluid className="mt-3">
          <Row>
            <ListCategories handleChangeCategory={this.handleChangeCategory} selectedCategory={this.state.selectedCategory} />
            <Col>
              <h5>Menu</h5>
              <hr />
              <Row>
                {menus.map((menu) => (
                  <Produk menu={menu} key={menu.id} />
                ))}
              </Row>
            </Col>
            <Keranjang />
          </Row>
        </Container>
      </div>
    )
  }
}