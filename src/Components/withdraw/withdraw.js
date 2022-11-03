import React from "react";
import {UserContext} from '../../App.js';
import { useFormik } from "formik";
import Account from '../account/account.js';

const ATMWithdraw = ({ onChange, isWithdraw, isValid }) => {
    return (
      <label className="label huge">
        <h3> WITHDRAW</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
      </label>
    );
  };

  
  export default ATMWithdraw;

// function Withdraw() {
//     console.log("Withdraw Loaded");
//     console.log(Account);
//     //const ctx = React.useContext(UserContext);
//     const formik = useFormik({
//         initialValues: {
//           balance: "",
//           withdraw: "",
//         },
//         onSubmit: (values) => {
//           alert("Withdraw Successful");
//         },
//         validate: (values) => {
//           let errors = {};
//           if (!values.withdraw) errors.withdraw = "field required";
//           return errors;
//         },
//       });
    
//       return (
//         <div className="container">
//         <h3>WITHDRAW</h3>
        
//           <form onSubmit={formik.handleSubmit}>
//           <div>balance </div>
//             <span
//               id="BalanceField"
//               type="number"
//               name="balance"
//               onChange={formik.handleChange}
//               value={formik.values.balance}
//             />
//             <br />

//             <div>WITHDRAW AMMOUNT:</div>
//             <input
//               id="withdrawField"
//               type="text"
//               name="withdraw"
//               onChange={formik.handleChange}
//               value={formik.values.withdraw}
//             />
//             {formik.errors.withdraw ? (
//               <div id="withdrawError" style={{ color: "red" }}>
//                 {formik.errors.withdraw}
//               </div>
//             ) : null}
        
//             <br />
           
//             <button id="submitBtn" type="submit">
//               WITHDRAW
//             </button>
//           </form>
//         </div>
//       );
//     }


// export default ATMWithdraw;