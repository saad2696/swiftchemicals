import React from "react";
import "../compnents/footer.css";
import 'font-awesome/css/font-awesome.min.css';

export const Footerpage = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col1 */}
          <div className="col">
            <h4>
              <strong>Location <i class="far fa-compass"></i></strong>
            </h4>
            <ul className="list-unstyled">
              <li>110 Block A, Street 3</li>
              <li> NFC Society Phase <span>&#8544;</span> </li>
              <li> Lahore, Pakistan</li>
            </ul>
          </div>
          {/* col2 */}
          <div className="col">
            <h4>Contact Through Email <i class="far fa-envelope"></i></h4>
            <ul className="list-unstyled" style={{paddingLeft:29}} >
              <li>swiftchemicals.co@gmail.com</li>
              <li>saad.ahmed2696@gmail.com </li>
            </ul>
          </div>
          {/* col3 */}
          <div className="col">
            <h4 style={{textAlign:"center"}}>Find Us On Social Media <i class="fas fa-users"></i></h4>
            <ul className="list-unstyled" style={{textAlign:"center"}}>
              <li><url>Facebook   <i class="fab fa-facebook"></i></url></li>
              <li>Linkedin        <i class="fab fa-linkedin"></i> </li>
              <li>Twitter         <i class="fab fa-twitter"></i>  </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm" style={{ paddingTop: 10, textAlign:"center" }}>
            &copy;{new Date().getFullYear()} Swift Chemicals Company | All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
