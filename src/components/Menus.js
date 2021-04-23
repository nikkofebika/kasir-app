import { Col, Row } from "react-bootstrap"
import React, { Component } from 'react'
import axios from "axios"
import { API_URL } from "../utils/Constants"
import Produk from "./Produk"

class Menus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            selectedCategory: 'Makanan'
        }
    }

    componentDidMount() {
        axios.get(API_URL + "products?category.nama=" + this.state.selectedCategory).then(res => {
            this.setState({
                menus: res.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        const { menus } = this.state
        return (
            <Col>
                <h5>Menu</h5>
                <hr />
                <Row>
                    {menus.map((menu) => (
                        <Produk menu={menu} key={menu.id} />
                    ))}
                </Row>
            </Col>
        )
    }
}

export default Menus