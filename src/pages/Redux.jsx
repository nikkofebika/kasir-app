import React, { Component } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Counter from "../components/Counter";

export default class Redux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            order: 0
        }
    }

    handleChangeOrder = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Row>
                <Col className="mt-5">
                    <center>
                        <Card style={{ width: '18rem' }}>
                            <div className="p-3" style={{ backgroundColor: 'aqua' }}>
                                <strong>{this.state.order}</strong>
                            </div>
                            <Counter order={this.state.order} handleChangeOrder={(newValue)=>this.handleChangeOrder(newValue)} />
                        </Card>
                    </center>
                </Col>
            </Row>
        )
    }
}
