import axios from "../../util/axiosInstance";
import React, { useContext, useReducer, useState } from "react";
import { AppContext } from "../../App";
import link from "../BankPrioritiesPage/BankPrioritiesPage";
import TransferGrid from "./TransferGrid";
import SentTransaction from "./SentTransaction";
import ReceiveTransaction from "./ReceiveTransaction";

function TransactionHistory() {
  const { user } = useContext(AppContext);

  /* 
            
            const {recipient} = useContext(AppContext)  */


  //Declaring state

  const [seeHistory, setSeeHistory] = useState(false);

  const [historyList, setHistoryList] = useState([]);

  /*  const [showHistory, setShowHistory] = useState(true) */

  //Fetching transaction history

  const getHistory = async () => {
    if (seeHistory) {
      setSeeHistory(false);
      return;
    }
    const response = await axios.get("/api/trans/history", {
      withCredentials: true,
    });

    console.log(response);
    setSeeHistory(true);

    setHistoryList(response.data);
  };

  return (
    <div className="transaction-history">
      <div className="">
        <div className="text-and-button">
          <h1 className="t-history-text">Transaction History</h1>
          <button className="t-history-button" onClick={() => getHistory()}>
            {seeHistory !== true ? "VIEW HISTORY" : "HIDE HISTORY"}
          </button>

          {/* {showHistory!==true ? getHistory():''} */}
        </div>
        <div className="transactions-list">
          {seeHistory ? (
            <>
              <TransferGrid transactionList={historyList}></TransferGrid>
              {historyList.map((transaction) => {
                console.log(transaction);
                console.log(user._id);
                return user._id === transaction.recipient ? (
                  <ReceiveTransaction transaction={transaction} />
                ) : (
                  <SentTransaction transaction={transaction} />
                );
              })}
            </>
          ) : (
            <p></p>
          )}
        </div>
        {/* <button className='section-button' type="button" onClick={(e) => {

      e.preventDefault();
      window.location.href='/mission';
      }}>Click Me!</button> */}
      </div>
    </div>
  );
}

export default TransactionHistory;
