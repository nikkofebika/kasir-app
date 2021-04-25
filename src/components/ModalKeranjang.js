import { Button, Form, Modal } from "react-bootstrap";
import { numberWithCommas } from "../utils/Constants";

const ModalKeranjang = ({
  showModal,
  handleCloseModal,
  keranjangDetail,
  jumlah,
  handleChangeJumlah,
  handleChangeKeterangan,
  keterangan,
  handleUpdateKeranjang,
  handleDeleteKeranjang,
  totalHargaPerItem,
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama + " "}
            <strong>
              Rp. {numberWithCommas(keranjangDetail.product.harga)}
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              Total Harga :{" "}
              <strong>Rp. {numberWithCommas(totalHargaPerItem)}</strong>
            </p>
          </div>
          <Form onSubmit={handleUpdateKeranjang}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="info"
                size="sm"
                className="mr-2"
                onClick={() => handleChangeJumlah("minus")}
              >
                <i className="fa fa-minus"></i>
              </Button>
              {jumlah}
              <Button
                variant="info"
                size="sm"
                className="ml-2"
                onClick={() => handleChangeJumlah("add")}
              >
                <i className="fa fa-plus"></i>
              </Button>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="ex: pedas, ga pake nasi"
                value={keterangan}
                name="keterangan"
                onChange={(e) => handleChangeKeterangan(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => handleDeleteKeranjang(keranjangDetail.id)}
          >
            Hapus Item
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
