import React, { useState, useEffect } from "react";
import { ForceGraph } from "./components/forceGraph";
import Navbar from "./components/Navbar";
import "./App.css";
import { convertLength } from "@mui/material/styles/cssUtils";

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);

  const [datas, setData] = useState([{}]);

  useEffect(() => {
    fetch("/grafo")
      .then((res) => res.json())
      .then(datas => {
        setData(datas);
        console.log(datas);
      });
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        {(typeof datas.grafo === 'undefined')?(
          <p>Loading . . .</p>
        ): (
          datas.grafo.map((hola,i)=> (
            <p key={i}>{hola}</p>
          ))
        )}
      </div>
      <section className="Main">
        {/*<ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />*/}
      </section>
    </div>
  );
}

export default App;
