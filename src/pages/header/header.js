import React from 'react';
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import './header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-container-main">
        <Logo />
      </div>
      <Nav />
    </header>
  );
}