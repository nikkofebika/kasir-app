import { Button, Card } from "react-bootstrap"
import { connect } from "react-redux"

const Counter = (props) => {
    // var newOrder = 0
    // const handlePlus = () => {
    //     newOrder = props.order + 1
    //     props.handleChangeOrder(newOrder)
    // }

    // const handleMinus = () => {
    //     newOrder = props.order - 1
    //     props.handleChangeOrder(newOrder)
    // }

    return (
        <div>
            <Card.Body>
                <Card.Title>Jumlah</Card.Title>
                <Card.Text>
                    {props.order}
                </Card.Text>
                <Button variant="primary" className="mr-3" onClick={props.handleMinus}>-</Button>
                <Button variant="primary" onClick={props.handlePlus}>+</Button>
            </Card.Body>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: 'PLUS_ORDER'}),
        handleMinus: () => dispatch({type: 'MINUS_ORDER'}),
    }
}

export default connect(mapStateToProps, mapsDispatchToProps)(Counter);