import React from 'react'

function Deposit() {
    return (
        <div>
            <div>
                <h1>Name:</h1>
                <input type="text" placeholder="Enter Name"/>

                <h1>Email:</h1>
                <input type="text" placeholder="Enter Email"/>

                <h1>Phone:</h1>
                <input type="text" placeholder="Enter Phone no"/>

                <h1>Amount</h1>
                <input type="text" placeholder="Enter amount"/>

                <button>Pay Now</button>
            </div>
        </div>
    )
}

export default Deposit
