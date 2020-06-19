import React from "react";

export const contact = () => (
  <div className="major-div" style={{paddingLeft:80}}>
    <div className="title" style={{ fontSize: 30, color: "#1949ad", padding: 15 }}>
      <strong>Contact Us</strong> <i class="far fa-handshake"></i> :
    </div>
   <div style={{backgroundColor:"yellow"}}>

   
    <div
      className="main-div"
      style={{ float: "left", alignContent: "center", padding: 30, fontSize:18}}
    >
      <div
        style={{
          padding: 10,
          border: "solid",
          borderWidth: "2px",
          borderColor: "#1949ad",
          width:"100%"
        }}
      >
        <div className="telephone">
          <div className="tele-title" style={{ fontSize: 25 }}>
            Telephone <i class="fas fa-tty"></i>:
          </div>
          <div className="tele-content">
            1) Mobile: +92 3008418606 <br />
            2) Mobile: +92 3008418606
            <br /> 3) Landline: 092-42-35225086
          </div>
        </div>
      </div>
    </div>
    <div
      className="main-div"
      style={{ float: "left", alignContent: "center", padding: 30, fontSize:18 }}
    >
      <div
        style={{
          padding: 10,
          border: "solid",
          borderWidth: "2px",
          borderColor: "#1949ad",
          width: "100%"
        }}
      >
        <div className="telephone">
          <div className="loc-title" style={{ fontSize: 25 }}>
            Site Location <i class="far fa-building"></i>:
          </div>
          <div className="tele-content">
          
              110 Block A, Street 3  NFC Society 
              
              <br/>Phase <span>&#8544;</span> Lahore, Pakistan
              <br/> <h4 style={{color:"#f1f2f6"}}>3) Landline: 092-42-35225086</h4>
            
          </div>
        </div>
      </div>
    </div>
    <div
      className="main-div"
      style={{ float: "left", alignContent: "center", paddingTop: 30, fontSize:18 }}
    >
      <div
        style={{
          padding: 10,
          border: "solid",
          borderWidth: "2px",
          borderColor: "#1949ad",
        }}
      >
        <div className="telephone">
          <div className="emai-title" style={{ fontSize: 25 }}>
            Email Us <i class="fas fa-envelope"></i>:
          </div>
          <div className="tele-content">
            1) waseemahmad@swiftchemicals.co <br />
            2) saadahmed@swiftchemicals.co
            <br/> <h4 style={{color:"#f1f2f6"}}>3) Landline: 092-42-35225086</h4>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);
