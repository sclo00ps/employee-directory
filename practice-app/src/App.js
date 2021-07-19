import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import DataArea from "./components/DataArea";
import DataBody from "./components/DataBody";
import DataTable from "./components/DataTable";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Wrapper>
          <Route exact path="/datatable" component={DataArea} />
          <Route exact path="/databox" component={DataBody} />
          <Route exact path="/datatable" component={DataTable} />
          <Route exact path="/searchBox" component={SearchBox} />
        <Header />
        <Main />
      </Wrapper>
     </div>
  </Router>
    
  );
}

export default App;
