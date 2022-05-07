import React, { useState, useEffect } from "react";
import { ForceGraph } from "./components/forceGraph";
import Navbar from "./components/Navbar";
import "./App.css";
import data from "./data/data.json";
import { convertLength } from "@mui/material/styles/cssUtils";
import { NuevoGrafo } from "./components/NuevoGrafo";

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);


  return (
    <div className="App">
      <Navbar></Navbar>
      <NuevoGrafo></NuevoGrafo>
      
      <section className="Main">
       <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
      </section>
    </div>
  );
}

export default App;
