import React from "react";
import {UserContext} from '../../App.js';
import { useFormik } from "formik";
import Account from '../account/account.js';

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };
  
  export default ATMDeposit;