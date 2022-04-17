import { Container, Offcanvas, Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsFillCartDashFill as DecrCartIcon, BsFillCartPlusFill as IncrCartIcon } from 'react-icons/bs';
import './Cart.css';

export function Cart(props) {

    const {showCart, handleHideCart, cart, addToCart, removeFromCart } = props;
    const ids = [...new Set(cart.map(cartItem => cartItem.id))];
    return (
        <Offcanvas show={showCart} placement='end' onHide={handleHideCart}>
            <Offcanvas.Header closeButton>
                <Button>Checkout</Button>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {ids.length < 1 &&
                    <div>Your cart is empty!</div>
                }
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
                                <Container className='d-flex justify-content-center mt-2'>
                                    <Button onClick={() => removeFromCart(id)}>
                                        <IconContext.Provider value={{ size: '1em' }}>
                                            <DecrCartIcon />
                                        </IconContext.Provider>
                                    </Button>
                                        <input 
                                            value={qty}
                                            style={{ textAlign: 'center', width: '4em'}}
                                        ></input>
                                    <Button onClick={() => addToCart(id)} >
                                        <IconContext.Provider value={{ size: '1em' }}>
                                            <IncrCartIcon />
                                        </IconContext.Provider>
                                    </Button>
                                </Container>
                            </Card.Body>
                        </Card>
                    )
                })}
            </Offcanvas.Body>
        </Offcanvas>
    )
}
