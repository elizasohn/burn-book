import React from "react";
import { Link } from 'react-router-dom';
import '../index.css';

var links = {
  color: 'white',
}


function Header(){
  var headerStyle = {
    margin: '1vh auto',
  }

  return (
    <div style = {headerStyle}>
      <h1><span class="w">E</span>
      <span class="b">n</span>
      <span class="w">D</span>
      <span class="b">A</span>
      <span class="w">n</span>
      <span class="b">g</span>
      <span class="w">E</span>
      <span class="b">r</span>
      <span class="w">e</span>
      <span class="b">d</span> @nImALS bUrN B0oK</h1>
      <div style = {links}>
      <Link to="/">Home</Link> | <Link to="/marketschedulelist">Market Schedule</Link> | <Link to="/producelist">Produce Offerings</Link>
      </div>
    </div>
  );
}


export default Header;
