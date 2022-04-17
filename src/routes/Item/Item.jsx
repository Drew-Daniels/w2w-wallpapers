import { useState } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsFillCartDashFill as DecrCartIcon, BsFillCartPlusFill as IncrCartIcon } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

import './Item.css';

export function Item(props) {

    const [loading, setLoading] = useState(true);
    const { shopItem } = props;

    const { category, imgURL, brandName, brandURL, cartQty } = shopItem;

    function handleCartDecr() {

    }

    function handleCartIncr() {

    }

    return (
        <Container className='item'>
            <Card>
                <Card.Header>
                    <Badge pill bg={category}>{category[0].toUpperCase() + category.slice(1)}</Badge>
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
                        <a href={brandURL}>{brandURL}</a>
                        <Container className='d-flex justify-content-center mt-2'>
                            <Button onClick={handleCartDecr}>
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <DecrCartIcon />
                                </IconContext.Provider>
                            </Button>
                            <input 
                                value={cartQty} 
                                style={{ textAlign: 'center', width: '4em'}}
                            ></input>
                            <Button onClick={handleCartIncr} >
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <IncrCartIcon />
                                </IconContext.Provider>
                            </Button>
                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
