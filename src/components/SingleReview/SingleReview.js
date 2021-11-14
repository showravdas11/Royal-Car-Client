import React from 'react';
import Rating from 'react-rating';
import './SingleReview.css'

const SingleReview = ({ review }) => {
    const { Name, description, Rate } = review;
    return (
        <>



            <div className="col mb-3 mt-5">
                <div className="card h-100 card-image">
                    <div className="card-body">
                        <h4 className="card-title">{Name}</h4>
                        <p className="card-text">{description}</p>
                        <p>
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                initialRating={Rate}
                                readonly
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleReview;