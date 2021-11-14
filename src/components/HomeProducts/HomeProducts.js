import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
import './HomeProducts.css'

const HomeProducts = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://secure-cove-15905.herokuapp.com/cars/6')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <>
            <div className="homeproduct-section">
                <p className="text-center">OUR VEHICLES BRANDS & TYPE</p>
                <h3 className="products-head text-center"><span>Find Your</span> Best Vehicles.</h3>
            </div>

            <div className="product-bg">

                <div className="container product-bg">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                        {
                            cars.map(car => <SingleProducts
                                key={car.name}
                                car={car}
                            >

                            </SingleProducts>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProducts;