import { Button, Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/Constants";

const Produk = ({ menu, handleAddToCart }) => {
  return (
    <Col lg={4} md={6} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={"assets/images/" + menu.category.nama + "/" + menu.gambar}
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <Button variant="primary" onClick={() => handleAddToCart(menu)}>
            Pesan
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Produk;
