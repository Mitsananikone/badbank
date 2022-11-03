import React from "react";
import Card from '../../context';
import bankLogo from '../../images/bank.png';

function Home(){
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="For all your banking needs"
        body={(<img src={bankLogo} alt="Bank Pic"/>)}
      />    
    );  
  }

export default Home;
