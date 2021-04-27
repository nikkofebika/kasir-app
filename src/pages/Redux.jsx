import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Counter from "../components/Counter";
import { RootContext } from "../context/Context";

class Redux extends Component {
    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Row>
                                <Col className="mt-5">
                                    <center>
                                        <Card>
                                            <div className="p-3" style={{ backgroundColor: 'aqua' }}>
                                                <strong>{value.state.order}</strong>
                                            </div>
                                            <Counter />
                                        </Card>
                                    </center>
                                </Col>
                                <Col className="mt-5">
                                    <center>
                                        <Card>
                                            <div className="p-3" style={{ backgroundColor: 'aqua' }}>
                                                <strong>{value.state.name}</strong>
                                            </div>
                                            <input type="text" value={value.state.name} onChange={(e) => value.dispatch({type: 'CHANGE_NAME', newName: e.target.value})} />
                                        </Card>
                                    </center>
                                </Col>
                            </Row>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}
export default Redux

// redux
// import React, { Component } from 'react'
// import { Card, Col, Row } from 'react-bootstrap'
// import { connect } from 'react-redux';
// import Counter from "../components/Counter";

// class Redux extends Component {
//     // constructor(props) {
//     //     super(props)

//     //     this.state = {
//     //         order: 0
//     //     }
//     // }

//     // handleChangeOrder = (newValue) => {
//     //     this.setState({
//     //         order: newValue
//     //     })
//     // }

//     handleChangeName = (e) => {
//         this.props.changeName(e.target.value)
//     }

//     render() {
//         return (
//             <Row>
//                 <Col className="mt-5">
//                     <center>
//                         <Card>
//                             <div className="p-3" style={{ backgroundColor: 'aqua' }}>
//                                 <strong>{this.props.order}</strong>
//                             </div>
//                             {/* <Counter order={this.state.order} handleChangeOrder={(newValue)=>this.handleChangeOrder(newValue)} /> */}
//                             <Counter />
//                         </Card>
//                     </center>
//                 </Col>
//                 <Col className="mt-5">
//                     <center>
//                         <Card>
//                             <div className="p-3" style={{ backgroundColor: 'aqua' }}>
//                                 <strong>{this.props.name}</strong>
//                             </div>
//                             {/* <Counter order={this.state.order} handleChangeOrder={(newValue)=>this.handleChangeOrder(newValue)} /> */}
//                             <input type="text" value={this.props.name} onChange={(e)=>this.handleChangeName(e)} />
//                         </Card>
//                     </center>
//                 </Col>
//             </Row>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder,
//         name: state.name
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: (nm) => dispatch({type:'CHANGE_NAME', newName: nm})
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Redux)