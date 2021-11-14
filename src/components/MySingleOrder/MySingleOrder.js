import React from 'react';

const MySingleOrder = ({ order, deleteOrder }) => {
    const { Name, description, img } = order;


    const handleDelete = id => {
        const isDelete = window.confirm("Are you sure you want to delete?");
        if (isDelete) {
            const url = `https://secure-cove-15905.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted')
                        deleteOrder(id)
                    }

                })
        }

    }

    return (
        <>
            <div className="col mb-3 mt-5">
                <div className="card h-100 card-image">
                    <img src={img} classNameNmae="card-img-top " alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{Name}</h4>
                        <p className="card-text">{description}</p>
                        <button onClick={() => handleDelete(order._id)} className=" Buy-Now">DELETE</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySingleOrder;