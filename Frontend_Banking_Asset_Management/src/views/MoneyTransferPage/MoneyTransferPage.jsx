import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../util/axiosInstance";
import { AppContext } from "../../App";

export default function MoneyTransfer() {
  const { user, recipient, setBalance } = useContext(AppContext);
  const [trasactionCompleted, setTransactionCompleted] = useState(false);
  console.log(user);
  const moneyTransfer = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    const formData = new FormData(e.target);

    const data = {
      accountNumber: formData.get("recipientaccount"),
      transmittedValue: formData.get("transferamount"),
    };


    const res = await axios.patch("/api/trans/transaction", data);
    console.log(res.data.sender.accountBalance);
    setBalance(res.data.sender.accountBalance);
    e.target.reset();
    setTransactionCompleted(true);
  };

  return (
    <div className="transfer-page">
      {user != null ? (
        <>
          {/*      <div className="account-number">

            <p>Account Number</p>
            <p>{user.accountNumber}</p>
            </div>
             <div className="acc-user-data">
            <p className="profile-greeting">Hi  {user.firstname},</p>
            <p className="total-balance-text">TOTAL BALANCE </p>
            <p className="account-balance">{user.accountBalance.toFixed(2)} EUR</p>
              <Link to='/profile' exact activeClassName='active' className='to-profile-button'>To Profile</Link>
               </div> */}
          <div className="send-money-card">
            <div className="money-card-data1">
              <p className="money-card-text"> Sender Name</p>
              <p className="money-card-text">Sender Account Number</p>
              <p className="money-card-text">Recipient Account {}</p>
              <p className="money-card-text">Transfer amount</p>
            </div>

            <form className="money-card-data2" onSubmit={moneyTransfer}>
              <p className="money-card-user-text">
                {user.firstname} {user.lastname}
              </p>
              <p className="money-card-user-accountnumber">
                {user.accountNumber}
              </p>
              <label className="label-block">
                <input
                  className="money-card-input"
                  name="recipientaccount"
                  type="recipientaccount"
                  required={true}
                />
              </label>

              <label className="label-block">
                <input
                  className="money-card-input"
                  name="transferamount"
                  type="transferamount"
                  required={true}
                />
              </label>

              <button className="send-money-button">Send</button>
            </form>
          </div>
        </>
      ) : (
        <p>No user found</p>
      )}
      {trasactionCompleted ? (
        <p className="transaction-complited-text">Transaction Completed</p>
      ) : null}
    </div>
  );
}
