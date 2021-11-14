import React from 'react';
import { Link } from 'react-router-dom';
import './Singleproducts.css'

const SingleProducts = ({ car }) => {
    const { name, price, descliption, img, _id } = car;
    return (
        <div>
            <>
                <div className="col mb-3">
                    <div className="card h-100 card-image">
                        <img src={img} classNameNmae="card-img-top " alt="" />
                        <div className="card-body">
                            <div className="price-time ">
                                <h6>{price}</h6>
                            </div>
                            <h4 className="card-title">{name}</h4>

                            <p className="card-text">{descliption}</p>
                            <Link to={`/placeorder/${_id}`}><button className="Buy-Now">Buy Now</button></Link>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default SingleProducts;