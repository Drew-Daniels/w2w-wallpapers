// import components
// react-bootstrap
import { Container, Carousel } from 'react-bootstrap';

// import data
import ShopItems from '../../data';

// import styling
import './Browser.css';

export function Browser(props) {

    return (
        <Container fluid>
            <Carousel>
                {ShopItems.map((shopItem, i) => {
                    return (
                        <Carousel.Item key={i} interval={5000}>
                            <img
                                className="d-block w-100 browser-image"
                                src={shopItem.imgURL}
                                alt={shopItem.brandName}
                            />
                            <Carousel.Caption>
                                <h3>{shopItem.brandName}</h3>
                                <a href={shopItem.brandURL} style={{ textDecoration: 'none', color: 'white' }}>{shopItem.brandURL}</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
}