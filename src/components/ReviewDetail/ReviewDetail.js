import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const ReviewDetail = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://secure-cove-15905.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="product-bg ">
            <div className="container mt-5">
                <h3 className="text-center">Our Client Review</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    {
                        reviews.map(review => < SingleReview
                            key={review.name}
                            review={review}
                        >
                        </SingleReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewDetail;