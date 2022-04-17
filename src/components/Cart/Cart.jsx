import { Container, Offcanvas, Card } from 'react-bootstrap';
import './Cart.css';

export function Cart(props) {

    const {shopItems, showCart, handleHideCart, cart, addToCart, removeFromCart } = props;
    const ids = [...new Set(cart.map(cartItem => cartItem.id))];
    return (

        // Need to iterate through the cart on each distinct shop item id, sum up the quantity and prices and display as a card
        <Offcanvas show={showCart} placement='end' onHide={handleHideCart}>
            <Offcanvas.Header closeButton>
                <Container className='d-flex flex-column'>
                    {ids.map((id, i) => {
                        const shopItemInstances = shopItems.filter(shopItem => shopItem.id === id);
                        const qty = shopItemInstances.length;
                        const { imgURL, brandName, price } = shopItemInstances[0];
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
                </Container>
            </Offcanvas.Header>
        </Offcanvas>
    )
}
