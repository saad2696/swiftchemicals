import React from "react";
import Image from "react-bootstrap/Image";
import saad from "../images/saad2.jpg";
import waseem from "../images/waseem.jpg";

export const team = () => (
  <div>
    <div>
      <div
        className="titleteam"
        style={{
          fontSize: 25,
          color: "#1949ad",
          textAlign: "center",
          padding: 10,
        }}
      >
        <strong>OUR TEAM</strong>
      </div>
    </div>
    <div style={{ textAlign: "center", paddingTop: 20, fontSize: 20 }}>
      <strong>
        Highly trained Pofessional Crew in all Relevant Product Line will Be
        at your Door Step!{" "}
      </strong>
    </div>
    <div
      className="titleteam"
      style={{
        fontSize: 25,
        color: "#1949ad",
        textAlign: "center",

        paddingLeft: 30,
        paddingTop: 20,
      }}
    >
      <strong>Managing Team:</strong>
    </div>
    <div style={{ padding: 15 }}>
      <div
        className="imagewrap"
        style={{ padding: 15, width: 220, height: 180, float: "left" }}
      >
        <Image
          src={waseem}
          roundedCircle
          style={{ width: 175, height: "110%", paddingLeft: 10 }}
        />
      </div>

      <div style={{ float: "left" }}>
        <div style={{ paddingTop: 40 }}>
          <p style={{ fontSize: 16 }}>
            <strong>Mr.Waseem Ahmad</strong> founded Swift Chemicals on basis of
            his three decades of practical experience in Printing and Packaging.
            <br />
            In his lucrative career, he gained experience from leading ranking
            ink & printing organizations Like 
            Packages Ltd. (Coates Lorilleux <br/> Inks Pakistan / Now DIC Inks Pakistan),
            
            Security Printing Corporation Pakistan (SICPA Inks Pakistan) and catering more
            than of hundreds  <br/> leading printers across the country
             by fullfilling their customised need in respective
            departments.He has gained experience  in respective <br/>field from 
            all over the world which includes major part of Europe.
          </p>
        </div>
      </div>
      <div
        style={{
          paddingLeft: 40,
          color: "#1949ad",
          fontSize: 18,
          clear: "both",
        }}
      >
        <strong>Waseem Ahmad</strong>
      </div>
      <div style={{ paddingLeft: 90, fontSize: 12 }}>
        <strong>(CEO)</strong>
      </div>
    </div>

    <div style={{ padding: 15 }}>
      <div
        className="imagewrap"
        style={{ padding: 15, width: 220, height: 180, float: "left" }}
      >
        <Image
          src={saad}
          roundedCircle
          style={{ width: 175, height: "110%", paddingLeft: 10 }}
        />
      </div>

      <div style={{ float: "left" }}>
        <div style={{ paddingTop: 40 }}>
          <p style={{ fontSize: 16 }}>
            <strong>Mr.Saad Ahmed</strong>, having an IT background is keen to
            implement newer business startegies for Swift Chemicals and it's
            potential Clients.
            <br />
            Supervising and leading company's business operations, Mr Saad
            perform's a range of tasks to ensure client's as well as company's{" "}
            <br /> productivity and efficiency including implementing business
            strategies, evaluating company performance and specialized business{" "}
            <br /> approach for clients.
          </p>
        </div>
      </div>
      <div
        style={{
          paddingLeft: 50,
          color: "#1949ad",
          fontSize: 18,
          clear: "both",
        }}
      >
        <strong>Saad Ahmed</strong>
      </div>
      <div style={{ paddingLeft: 45, fontSize: 12 }}>
        <strong>(Business Manager)</strong>
      </div>
    </div>
  </div>
);

export default team;
