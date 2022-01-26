import React from "react";
import logo from "../images/logo.png"
import {Link} from 'react-router-dom'


const topics =
  [
    'science',
    'tech',
    'arts',
    'food',
    'sports'
  ];

function HeaderLoop () {
  return (
      topics.map((x,i)=>
      
      <li key={i}>
          <Link to={`/article-section/${x}`}>
             {x.toUpperCase()}
          </Link>
        </li>)
  );
}
export default function Header() {
  return (
    <header className="nav-container">
      <div className="imglogo">
        <img src={logo} alt="" />
      </div>

      <ul className="containerul">
        <HeaderLoop />
      </ul>
      
    </header>
  );
}
