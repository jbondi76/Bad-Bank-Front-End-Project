import React from 'react';
import Card from './context';
import { UserContext } from './context';
import { useContext} from 'react';
import { useState} from 'react';

function Withdraw() {

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [withdraw, setWithdraw] = useState('');
  const [balance, setBalance] = useState('');
  const ctx = useContext(UserContext);
  let data = JSON.stringify(ctx.users[ctx.users.length - 1].balance);
  console.log(data);
  console.log(ctx);

   function validate(num) {
      if(isNaN(num) || num < 0) { 
          alert('Please enter a valid number');
          setWithdraw('');
          return false;
          
      }
      return true;
  }

  function overdraft(num){
      if(Number(num) > data){
          alert('You do not have enough money in your account to withdraw that amount.');
          setStatus('Transaction failed');
          setTimeout(() => setStatus(''), 2000);
          clearForm();
          return false 
      }
      return true;
  }

  function handleWithdrawal(amount) {
      console.log(amount);
      if((!validate(amount)) || (!overdraft(amount)))
      return;
      setBalance(data - amount);
      ctx.users[ctx.users.length -1].balance -= Number(amount);
      console.log(ctx.users.balance)
      setShow(false);
  }

  function clearForm() {
      setWithdraw('');
      setShow(true)
  }

  return (
      <Card 
       bgcolor="success"
       txtcolor="black"
       header="WITHDRAWAL FUNDS"
       title="Enter an amount below to withdraw funds from your account."
       status={status} 
       body={
          show ? ( <>
          ------------ <br />
          Current Balance: ${data} <br />
          <br />
          <input 
          type="input" 
          className="form-control"
          id="withdraw"
          placeholder="Enter Amount"
          value={withdraw}
          onChange={e => setWithdraw(e.currentTarget.value)} />
          <br/>

          <button 
          type="submit"
          className="btn btn-light"
          disabled={withdraw === ''}
          onClick={() => handleWithdrawal(withdraw)}>Submit Withdrawal</button>
             
          </> ) : (  <>
         
          <h5>Success!</h5>
          Current Balance: ${data} <br />
          <br />
          <button 
          type="submit" 
          className="btn btn-light" 
          onClick={clearForm}
          >Make another withdrawal</button>
          
          </> )
       }
     
      />
   );
}

export default Withdraw;