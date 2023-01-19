import React from 'react';
import AuthContext from '../UI/store/AuthContext';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  console.log()
  return (
    <AuthContext.Consumer> 
      {(ctx)=>{
        console.log(ctx);
        return  <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
