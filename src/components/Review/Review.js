import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Review.css'

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://secure-cove-15905.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                }
            })
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://i.ibb.co/Gd3MDkt/Customer-Survey-pana.png" alt="" />
                    </div>
                    <div className="add-service col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("Name", { required: true, maxLength: 20 })} value={user.displayName} />
                            <br />
                            <input {...register("email")} value={user.email} />
                            <br />
                            <input type="text" {...register("description")} placeholder="Write Your Review" />
                            <br />
                            <input {...register("Rate")} placeholder="Rate Us(1-5)" />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;