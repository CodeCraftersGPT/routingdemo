import React from 'react';



const Registration = () => {

    // implement registration logic here...

    // handle submit event

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted...');
        // post the data to server
    }

    return (
        <div className="container">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
    <label htmlFor="email">Email</label>
    <div className="input-group">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="email" className="form-control" id="email" aria-describedby="inputGroupPrepend" />
    </div>
</div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"  />
                  
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Registration;
