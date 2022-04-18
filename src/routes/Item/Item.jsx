import { useState } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsFillCartDashFill as DecrCartIcon, BsFillCartPlusFill as IncrCartIcon } from 'react-icons/bs';
import { AiFillStar as StarsIcon } from 'react-icons/ai';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

import './Item.css';

export function Item(props) {

    const [loading, setLoading] = useState(true);
    const { cart, addToCart, removeFromCart } = props;
    const { id, category, imgURL, brandName, brandURL, stars } = props.shopItem;

    const qty = cart.filter(cartItem => cartItem.id === id).length;

    var starElements = [];
    console.log(stars);
    for (let i=0; i < stars; i++) {
        const starElement = (
            <IconContext.Provider value={{ color: 'rgb(245, 233, 66)' }}>
                <StarsIcon />
            </IconContext.Provider>
        )
        starElements.push(starElement);
    }

    return (
        <Container className='mb-2'>
            <Card style={{ backgroundColor: ' rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white' }}>
                <Card.Header className='d-flex justify-content-between'>
                    <Badge pill bg={category}>{category[0].toUpperCase() + category.slice(1)}</Badge>
                    <Container>
                        {starElements}
                    </Container>
                </Card.Header>
                <div>
                    {loading &&
                        <div className='d-flex justify-content-center align-items-center'>
                            <Spinner animation="grow" variant="primary" />
                        </div>
                    }
                    <Card.Img 
                        src={imgURL} 
                        style={ loading ? {display: 'none'} : {} }
                        onLoad={() => {setLoading(false)}} 
                    />
                </div> 
                <Card.Body>
                    <Card.Title>{brandName}</Card.Title>
                    <div className='d-flex flex-column'>
                        <Card.Subtitle><a href={brandURL}>{brandURL}</a></Card.Subtitle>
                        <Card.Footer className='d-flex justify-content-center pt-2'>
                            <Button onClick={() => removeFromCart(id)}>
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <DecrCartIcon />
                                </IconContext.Provider>
                            </Button>
                            <input 
                                value={qty}
                                style={{ textAlign: 'center', width: '4em', backgroundColor: 'rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white' }}
                                readOnly
                            ></input>
                            <Button onClick={() => addToCart(id)} >
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <IncrCartIcon />
                                </IconContext.Provider>
                            </Button>
                        </Card.Footer>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
