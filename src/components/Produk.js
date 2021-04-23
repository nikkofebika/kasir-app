import { Button, Card, Col } from "react-bootstrap"

const Produk = ({ menu }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow">
                <Card.Img variant="top" src={"assets/images/" + menu.category.nama + "/" + menu.gambar} />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp. {menu.harga}
                    </Card.Text>
                    <Button variant="primary">Pesan</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Produk