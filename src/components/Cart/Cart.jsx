import { Container, Offcanvas, Card, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsFillCartDashFill as DecrCartIcon, BsFillCartPlusFill as IncrCartIcon } from 'react-icons/bs';
import { VscChromeClose as CartCloseIcon } from 'react-icons/vsc';
import './Cart.css';

export function Cart(props) {

    const {showCart, handleHideCart, cart, addToCart, removeFromCart } = props;
    const ids = [...new Set(cart.map(cartItem => cartItem.id))];
    return (
        <Offcanvas show={showCart} placement='end' onHide={handleHideCart} style={{ backgroundColor: ' rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white' }}>
            <Offcanvas.Header>
                <Button onClick={handleHideCart}>
                    <IconContext.Provider value={{ color: 'white' }}>
                        <CartCloseIcon />
                    </IconContext.Provider>
                </Button>
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
                    const sumAsCurrency = sum.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                    return (
                        <Card key={i} style={{ backgroundColor: ' rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white' }}>
                            <Card.Header>{brandName}</Card.Header>
                            <Card.Body>
                                <Card.Img variant='top' src={imgURL} alt={brandName} />
                                <Card.Text style={{ paddingTop: '1em', color: 'rgb(13, 110, 253)' }}>Quantity: {qty}</Card.Text>
                                <Card.Text style={{ paddingTop: '.5em', color: 'rgb(13, 110, 253)' }}>Subtotal: {sumAsCurrency}</Card.Text>
                                <Container className='d-flex justify-content-center mt-2'>
                                    <Button onClick={() => removeFromCart(id)}>
                                        <IconContext.Provider value={{ size: '1em' }}>
                                            <DecrCartIcon />
                                        </IconContext.Provider>
                                    </Button>
                                        <input 
                                            value={qty}
                                            style={{ textAlign: 'center', width: '4em', backgroundColor: 'rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white'}}
                                            readOnly
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
