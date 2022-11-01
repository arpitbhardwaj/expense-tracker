import React from 'react';

import classes from './Navigation.module.css';
import Button from '../UI/Button';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {/* {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )} */}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
