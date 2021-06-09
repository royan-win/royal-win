import React from 'react'
const Bankaccount = () => {
    const user = JSON.parse(localStorage.getItem("profile"));
    console.log(user?.token);
    return (
        <div>
            <h1>Account number</h1>
            <h3>{user?.result?.bank_acc}</h3>
            <h1>IFSC</h1>
            <h3>{user?.result?.ifsc}</h3>
        </div>
    )
}

export default Bankaccount
