import React from 'react';
import ATMWithdraw from '../withdraw/withdraw.js';
import ATMDeposit from '../deposit/deposit.js';

  
  const Account = () => {
    // let deposit = 0; // state of this transaction
    const [deposit, setDeposit] = React.useState(0);
    const [withdraw, setWithdraw] = React.useState(0);
    const [balance, setBalance] = React.useState(100);
    const [isDeposit, setIsDeposit] = React.useState(false);
    const [isWithdraw, setIsWithdraw] = React.useState(false);
     const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${balance} `;
    const handleChange = (event) => {
      console.log(Number(event.target.value));
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
      }
      if (Number(event.target.value) > balance) {
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? balance + deposit : balance - deposit;
      setBalance(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      console.log(event.target.value);
      setAtmMode(event.target.value);
      setValidTransaction(false);
      if (event.target.value === 'Deposit') {
        setIsDeposit(true);
      } else {
        setIsDeposit(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <>
          <h2 id="total">{status}</h2>
     
          {atmMode && (
            <ATMDeposit
              onChange={handleChange}
              isDeposit={isDeposit}
              isValid={validTransaction}
            ></ATMDeposit>
          )}
        </>
      </form>
    );
  };
  // ========================================
  export default Account;
  