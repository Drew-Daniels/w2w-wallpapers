import { Container, Offcanvas, Card } from 'react-bootstrap';
import './Cart.css';

export function Cart(props) {

    const {showCart, handleHideCart, cart, addToCart, removeFromCart } = props;
    const ids = [...new Set(cart.map(cartItem => cartItem.id))];
    return (
        <Offcanvas show={showCart} placement='end' onHide={handleHideCart}>
            <Offcanvas.Header closeButton />
            <Offcanvas.Body>
                {ids.map((id, i) => {
                    const cartItemInstances = cart.filter(cartItem => cartItem.id === id);
                    const qty = cartItemInstances.length;
                    const { imgURL, brandName, price } = cartItemInstances[0];
                    const sum = qty * price;
                    return (
                        <Card key={i}>
                            <Card.Header>{brandName}</Card.Header>
                            <Card.Body>
                                <Card.Img variant='top' src={imgURL} alt={brandName} />
                                <Card.Text>{qty}</Card.Text>
                                <Card.Text>{sum}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
