import React from "react";
import logo_light from "../images/logo_light.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-section1">
        <img className="small-logo" src={logo_light} alt="" />
        <p>
          we run our sight off of donations i could sell my house for this sight
          pease we need money to fight the satanist baby sacrificing un stylish
          evil bad people. donate now!!!!!!
        </p>
      </div> 
      <div className="footer-section2">
        <h3>Sign-up for our Newsletter</h3>
        <p>
          it was said that the wisdom in our articals is derived from very coolo
          greecoroman intersecianal people, all thigs are true
        </p>
        <form action="#" method="get">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="email"
          />
          <input type="subscribe"  className="subscribe" />
        </form>
      </div> 
      <div className="footer-section3">
        <h3 className="contact">Connect with Us</h3>
        <ul>
          <li>
            <a className="button-contact" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="button-contact" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className="button-contact" href="#">
              Subscriptions
            </a>
          </li>
          <li>
            <a className="button-contact" href="#">
              Help
            </a>
          </li>
        </ul>
      </div> 
    </footer>
  );
}
