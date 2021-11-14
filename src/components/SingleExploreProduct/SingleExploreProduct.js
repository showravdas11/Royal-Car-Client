import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExploreProducts from '../ExploreProducts/ExploreProducts';
import './SingleExploreProduct.css'

const SingleExploreProduct = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://secure-cove-15905.herokuapp.com/cars/10')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <div >
            <div className="explore-bg d-flex justify-content-center align-items-center">
                <h2 className="text-center explore-head"> <Link className="item" to="/home">Home</Link> || Our All Product</h2>
            </div>
            <div className="product-bg">
                <div className="container product-bg">
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                        {
                            explores.map(explore => <ExploreProducts
                                key={explore.name}
                                explore={explore}
                            >

                            </ExploreProducts>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleExploreProduct;