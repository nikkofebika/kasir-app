import React, { Component } from 'react'
import { RootContext } from "../context/Context";

class Redux2 extends Component {
    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div>
                                <h1>Jumlah COunter : {value.state.order}</h1>
                                <h1>Name : {value.state.name}</h1>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Redux2

// redux
// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class Redux2 extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Jumlah COunter : {this.props.order}</h1>
//                 <h1>Name : {this.props.name}</h1>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//         order: state.totalOrder,
//         name: state.name
//     }
// }
// export default connect(mapStateToProps)(Redux2)