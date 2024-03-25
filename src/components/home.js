import React from 'react';
import Card from './context';
import BankPic from '/Users/jasonbondi/Desktop/badbank-react/my-app/src/components/badbank.png.webp';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
      <Card                
          padding="20px"
          bgcolor="success"
          txtcolor="black"          
          header="WELCOME TO BAD BANK"
          title="The only bank where your financial future is our last priority!" 
       
          text="Manage your account with the toolbar above."
          body={(<>
              <img 
              src={BankPic} 
              style={{ padding: '10px'}} 
              className="img-fluid" 
              alt="Responsive Image" />
              <br/>
              <button
              type="submit" 
              className="btn btn-info">
                  <NavLink 
                  style={{ color: 'white'}} 
                  to="/createaccount/">
                      Click Here to Open an Account
                  </NavLink>
              </button>
              </>)}
         
      />
   );
}

export default Home;
