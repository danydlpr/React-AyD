import react from "react";

export function NuevoGrafo() {
  const url = "http://127.0.0.1:5000/crear";

  const [nodes, setNodes] = react.useState("");

  function crearGrafo(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes: nodes,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <form onSubmit={crearGrafo}>
        <input
          type="text"
          onChange={(e) => setNodes(e.target.value)}
          value={nodes}
          placeholder="nodes"
          autoFocus
        />
        <button>Create</button>
      </form>
    </div>
  );
}
