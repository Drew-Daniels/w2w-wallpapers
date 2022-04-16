// import components
// react-bootstrap
import { Container, Carousel, Card } from 'react-bootstrap';

// import data
import { siteReviews } from '../../data';

// import styling
import './SiteReviews.css';

export function SiteReviews(props) {

    return (
        <Container fluid>
            <h1 style={{ fontStyle: 'italic' }}>What people are saying about Wall-to-Wall Wallpapers:</h1>
            <Carousel interval={5000} controls={false} indicators={false}>
                {siteReviews.map((siteReview, i) => {
                    return (
                        <Carousel.Item className='site-review'>
                            <Card>
                                <Card.Header>
                                    {siteReview.reviewer}
                                    {' at '}
                                    {siteReview.time}
                                </Card.Header>
                                <Card.Body>{siteReview.review}</Card.Body>
                            </Card>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Container>
    )
}
