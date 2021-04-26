import React, { Component } from 'react'
import { connect } from 'react-redux'

class Redux2 extends Component {
    render() {
        return (
            <div>
                <h1>Jumlah COunter : {this.props.order}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{order: state.totalOrder}
}
export default connect(mapStateToProps)(Redux2)