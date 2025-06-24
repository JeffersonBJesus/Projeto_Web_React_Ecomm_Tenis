import { Link } from "react-router-dom";
import React from 'react';
const Logo = () =>  {
  return (
    <Link to="/">
      <h1 className="logo">
        <span></span>
      </h1>
    </Link>
  )
}


export default Logo;