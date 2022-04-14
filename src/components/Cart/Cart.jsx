// import components
// react-bootstrap
import { Offcanvas } from 'react-bootstrap';

// import styling
// my styling
import './Cart.css';

export function Cart(props) {

    const {showCart, handleHideCart} = props;

    return (
        <Offcanvas show={showCart} placement='end' onHide={handleHideCart}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
        </Offcanvas>
    )
}
