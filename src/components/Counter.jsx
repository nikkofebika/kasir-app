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

    const handleChangeOrder = (type) => {
        let newOrder = props.order
        if (type === 'plus') {
            newOrder++;
        } else {
            newOrder > 0 && newOrder--
        }
        props.changeOrder(newOrder)
    }

    return (
        <div>
            <Card.Body>
                <Card.Title>Jumlah</Card.Title>
                <Card.Text>
                    {props.order}
                </Card.Text>
                {/* <Button variant="primary" className="mr-3" onClick={props.handleMinus}>-</Button>
                <Button variant="primary" onClick={props.handlePlus}>+</Button> */}
                <Button variant="primary" className="mr-3" onClick={()=>handleChangeOrder('min')}>-</Button>
                <Button variant="primary" onClick={()=>handleChangeOrder('plus')}>+</Button>
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
        changeOrder: (val) => dispatch({type: 'CHANGE_ORDER', newValue: val}),
    }
}

export default connect(mapStateToProps, mapsDispatchToProps)(Counter);