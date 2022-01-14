import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { ProductContext } from '../../ProductContext';
import { Container,Button } from 'reactstrap';
import DetailModal from '../Layout/Modal';
import Swal from 'sweetalert2'

const CartTotal = () => {
  const { megaState } = useContext(ProductContext);
  const { cartTotal, cartTax, cartSubTotal } = megaState;

  const success = () => {
    Swal.fire(
      'Payment is successful :)',
      'Do you want to do shopping again?',
      'success'
    )
  }

  return (
    <Row>
      <DetailModal modalProduct={1,"  ", " ", 15}/>
      <Col sm="12" md={{ size: 3, offset: 9 }}>
        <h4>Sub Total : $ {cartSubTotal}</h4>
        <h4>Tax : $ {cartTax}</h4>
        <h4>Total : $ {cartTotal}</h4>
        <Button color="success" onClick={() => success()}>
                Purchase
              </Button>
      </Col>
    </Row>
  );
};

export default CartTotal;
