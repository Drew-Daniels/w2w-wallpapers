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
            <h1 style={{ fontStyle: 'italic', color: 'rgb(13, 110, 253)' }}>What people are saying about Wall-to-Wall Wallpapers:</h1>
            <Carousel interval={5000} controls={false} indicators={false} className='pt-2'>
                {siteReviews.map((siteReview, i) => {
                    return (
                        <Carousel.Item key={i} className='site-review'>
                            <Card style={{ backgroundColor: 'rgb(0, 30, 60)', border: '1px solid rgb(19, 47, 76)', color: 'white' }}>
                                <Card.Header>
                                    <span style={{ color: 'rgb(13, 110, 253)'}}>{siteReview.reviewer}</span>
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
