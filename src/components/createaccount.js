import React from 'react';
import Card from './context';
import { UserContext } from './context';
import { useState } from 'react';

function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const ctx = React.useContext(UserContext);
 
 // let users = userContext.state.users;
  console.log(JSON.stringify(ctx))

  function validate(field, label) {
      if (!field) {
          setStatus(`Please enter a valid ${label}`);
          setTimeout(() => setStatus(''), 3000);
          return false;
      }
      return true;
  }
  
  function checkPassword(password) {
      if(password.length < 8){
          alert('Password must be at least 8 characters long');
          return false;
      }
      return true;
  }

  function handleCreate() {
      console.log(name, email, password);
      if (!validate(name, 'name')){
           alert('Name is required');
           
          return;
      } 
      if (!validate(email, 'email')) {
          alert('Email is required')
          return;
      };
    
      if (!checkPassword(password, 'password')){  
          return;
      };

     ctx.users.push({name, email, password, balance: 0});
     setShow(false);  
      
  }

  function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
  }

  return (
  
      <Card 
      bgcolor="success"
      txtcolor="black"
      header="CREATE YOUR ACCOUNT"
      title="Complete the form to create a new account."
      status={status}
      body={show ? ( <>

          Name<br/>
          <input 
          type="input" 
          className="form-control" 
          id="name" 
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.currentTarget.value)} /> <br/>

          Email
          <input 
          type="input"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)} /> <br/>

          Password
          <input 
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)} /> 
          <br/>
          <button 
          type="submit" 
          className="btn btn-light" 
          disabled={name === "" && email === "" && password === ""}
          onClick={handleCreate}>Create Account</button>
         
         </> ) : ( <>
         
          <h5>Success!</h5>
          <button 
          type="submit" 
          className="btn btn-light" 
          onClick={clearForm}
          disabled={name === "" && email === "" && password === ""}
          >Add another account</button>
          
          </> )
          }
      
      />
      ) 
}

export default CreateAccount;