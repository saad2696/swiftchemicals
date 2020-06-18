import React from "react";
import imghome from '../images/homepg.jpg'
export const home = () => (
    <div>
  <div style={{ padding: 35,float:"left" }}>
    <div
      className="titlehome"
      style={{ paddingLeft: 10, fontSize: 25, color: "#1949ad" }}
    >
      <strong>Welcome, to Swift Chemicals</strong>
    </div>
    <div style={{ fontSize: 16, padding: 15 }}>
      Swift Chemical Company, established with an ultimate objective to serve
      the printing and coating industry
      <br /> by catering basic needs of industry under one umbrella. With
      experience of more than three decades,<br/> we have gathered approved products best suited for your business
      requirements.
      <br />
      <br />
      Whether it is printing inks, cost effective dilutes, over print varnishes,
      adhesives , plastic films or
      <br /> rotogravure cylinders all will be provided as one window operation.Our professionals crew, with <br/> hand-on experience 
      will be obliged to serve you!
      
    </div>
    
  </div>
  <div style={{ alignContent:"center", paddingTop:15, paddingLeft: 50}}>
        <img  style={{  objectFit:"cover" ,float:"left",width:"375px",height:"270px", paddingLeft:19, paddingTop:20}}src={imghome} alt="image1"/>
    </div>
  </div>
);
