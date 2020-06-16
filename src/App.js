import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { home } from "./routes/home";
import { contact } from "./routes/contact";
import { service } from "./routes/service";
import { team } from "./routes/team";
import { noMatch } from "./routes/noMatch";
import { Navigbar } from "./compnents/Navigbar";
import { Caro } from "./compnents/Caro";
import { Footerpage } from "./compnents/Footerpage";
import './App.css'
function App() {
  return (
    
      <div classname="page-container" style={{display:"flex", flexDirection:"column", 
      minHeight:"100vh", backgroundColor:"#f1f2f6"}}>
        <div className="content-wrap" style={{flex:1}}>
          <Router>
            <Navigbar />
            <Caro />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/service" component={service} />
              <Route exact path="/team" component={team} />
              <Route exact path="/contact" component={contact} />
              <Route component={noMatch} />
            </Switch>
          </Router>
        </div>
        <Footerpage />
     </div>
  );
}

export default App;
