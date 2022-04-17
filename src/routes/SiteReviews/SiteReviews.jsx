import { useState, useEffect } from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import { siteReviewsData } from '../../data';
import './SiteReviews.css';

class SiteReview {
    constructor(review, reviewer, time) {
        this.review = review;
        this.reviewer = reviewer;
        this.time = time;
    }
}

export function SiteReviews(props) {

    const [siteReviews, setSiteReviews] = useState(
        siteReviewsData.map(siteReviewData => {
            const values = Object.values(siteReviewData);
            return new SiteReview(...values);
        })
    );

    return (
        <Container fluid>
            <h1 style={{ fontStyle: 'italic' }}>What people are saying about Wall-to-Wall Wallpapers:</h1>
            <Carousel interval={5000} controls={false} indicators={false}>
                {siteReviews.map((siteReview, i) => {
                    console.log(siteReview)
                    return (
                        <Carousel.Item key={i} className='site-review'>
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
