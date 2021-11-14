import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://secure-cove-15905.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <button type="submit">Add Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;