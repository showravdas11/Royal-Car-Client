import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()

    const { serviceId } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://secure-cove-15905.herokuapp.com/details/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [serviceId])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secure-cove-15905.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='detail-img' src={details.img} alt="" />

                        <h2 style={{ color: '#FFCD00' }}>Name: {details.name}</h2>

                        <p>Details: {details.descliption}</p>
                    </div>
                    <div className="col-md-6 place-form">
                        <h2>Please Add information</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-input">
                            <input  {...register("Name", { required: true, maxLength: 20 })} value={details.name} />
                            <br />
                            <input  {...register("email")} placeholder="description" value={user.email} />
                            <br />
                            <input {...register("description")} placeholder="description" />
                            <br />
                            <input type="text" {...register("img")} placeholder="image url" value={details.img} />
                            <br />
                            {/* <input type="Place Order" /> */}
                            <button className="place-btn">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;