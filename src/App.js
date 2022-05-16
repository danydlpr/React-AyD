import React, { useState, useEffect, Component } from "react";
import { ForceGraph } from "./components/forceGraph";
import Navbar from "./components/Navbar";
import "./App.css";
import data from "./data/data.json";


export default class App extends Component {
  

 
  render(){
  return (
    <div className="App">
      <Navbar></Navbar>
      
       <ForceGraph linksData={data.links} nodesData={data.nodes} />
      
    </div>
  );
  }
}


