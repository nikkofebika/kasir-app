import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import Counter from "../components/Counter";

class Redux extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         order: 0
    //     }
    // }

    // handleChangeOrder = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Row>
                <Col className="mt-5">
                    <center>
                        <Card style={{ width: '18rem' }}>
                            <div className="p-3" style={{ backgroundColor: 'aqua' }}>
                                <strong>{this.props.order}</strong>
                            </div>
                            {/* <Counter order={this.state.order} handleChangeOrder={(newValue)=>this.handleChangeOrder(newValue)} /> */}
                            <Counter />
                        </Card>
                    </center>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(Redux)