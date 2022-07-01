import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import PDF from "../data/Manual_de_Usuario.pdf";

const Navbar = () => {
  const [nodes, setNodes] = useState("");
  const [arcos, setArcos] = useState("");
  const [node1, setNode1] = useState("");
  const [archivo, setArchivo] = useState("");
  const [nameGrafo, setNameGrafo] = useState("");
  const [nameNodo, setNameNodo] = useState("");
  const [nameNodoNuevo, setNameNodoNuevo] = useState("");
  const [origenArco, setOrigenArco] = useState("");
  const [finArco, setFinArco] = useState("");
  const [nuevoOrigenArco, setNuevoOrigenArco] = useState("");
  const [nuevoFinArco, setNuevoFinArco] = useState("");
  const [pesoArco, setPesoArco] = useState("");

  /*Editar arco*/
  const [anchorEditarArco, setAnchorEditarArco] = React.useState(false);
  /*Eliminar arco*/
  const [anchorEliminarArco, setAnchorEliminarArco] = React.useState(false);
  /*Crear arco*/
  const [anchorCrearArco, setAnchorCrearArco] = React.useState(false);
  /*Editar nodo*/
  const [anchorEditarNodo, setAnchorEditarNodo] = React.useState(false);
  /*Eliminar nodo*/
  const [anchorEliminarNodo, setAnchorEliminarNodo] = React.useState(false);
  /*Crear nodo*/
  const [anchorCrearNodo, setAnchorCrearNodo] = React.useState(false);
  /*Exportar PNG*/
  const [anchorExportarComoPNG, setAnchorExportarComoPNG] =
    React.useState(false);
  /*Exportar PDF*/
  const [anchorExportarComoPDF, setAnchorExportarComoPDF] =
    React.useState(false);
  /*Exportar Excel*/
  const [anchorExportarComoExcel, setAnchorExportarComoExcel] =
    React.useState(false);
  /* Guardar Como*/
  const [anchorGuardarComo, setAnchorGuardarComo] = React.useState(false);
  /* Abrir grafo*/
  const [anchorAbrir, setAnchorAbrir] = React.useState(false);
  /* Cuadro nuevo grafo aleatorio */
  const [anchorGraAl, setAnchorGraAl] = React.useState(false);
  /* Cuadro nuevo grafo personalizado */
  const [anchorGraPer, setAnchorGraPer] = React.useState(false);
  /* Opcion Menu editar */
  const [anchorElEd, setAnchorEd] = React.useState(null);
  /* Opcion Menu Archivo */
  const [anchorNav, setanchorNav] = React.useState(null);
  /* Opcion Menu Herramienta */
  const [anchorHer, setAnchorHer] = React.useState(null);
  /* Opcion Menu aplicacion */
  const [anchorApp, setAnchorApp] = React.useState(null);
  /* Opcion Menu Ayuda */
  const [anchorAy, setAnchorAy] = React.useState(null);
  /* Opcion Menu ventana */
  const [anchorVen, setAnchorVen] = React.useState(null);
  /* Opcion Menu Analizar */
  const [anchorAn, setanchorAn] = React.useState(null);
  /* Opcion SubMenu nuevo grafo */
  const [anchorGr, setanchorGr] = React.useState(null);
  /* Opcion SubMenu exportar datos */
  const [anchorEx, setanchorEx] = React.useState(null);
  /* Opcion SubMenu editar nodo */
  const [anchorEdNd, setAnchorEdNd] = React.useState(null);
  /* Opcion SubMenu editar arco */
  const [anchorEdAr, setanchorEdAr] = React.useState(null);

  function crearGrafo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/crearAl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes: nodes,
        arcos: arcos,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorGraAl(false);
  }

  function crearPerso(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/crearPer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: node1,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorGraPer(false);
  }

  function cerrarGrafo() {
    fetch("http://127.0.0.1:5000/clear", {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.text())
    .then((data) => window.alert(data));
  }

  function guardarGrafo() {
    fetch("http://127.0.0.1:5000/guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.text())
    .then((data) => window.alert(data));
  }

  function guardarComo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/guardarComo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameGrafo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorGuardarComo(false);
  }

  function exportarComoExcel(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/exportarComoExcel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameGrafo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorExportarComoExcel(false);
  }

  function exportarComoPDF(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/exportarComoPDF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameGrafo,
      }),
    })
    setAnchorExportarComoPDF(false);
  }

  function exportarComoPNG(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/exportarComoPNG", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameGrafo,
      }),
    })
    setAnchorExportarComoPNG(false);
  }
  function crearNodo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/nuevoNodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameNodo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorCrearNodo(false);
  }

  function eliminarNodo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/eliminarNodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameNodo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorEliminarNodo(false);
  }

  function editarNodo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/editarNodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        label: nameNodo,
        nuevo: nameNodoNuevo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorEditarNodo(false);
  }

  function crearArco(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/nuevoArco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inicio: origenArco,
        fin: finArco,
        weight: pesoArco,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorCrearArco(false);
  }

  function eliminarArco(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/eliminarArco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inicio: origenArco,
        fin: finArco,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorEliminarArco(false);
  }

  function editarArco(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/editarArco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inicio: origenArco,
        fin: finArco,
        nuevoInicio: nuevoOrigenArco,
        nuevoFin: nuevoFinArco,
        weight: pesoArco,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorEditarArco(false);
  }
  function abrirArchivo(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/abrir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        archivo: archivo,
      }),
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorAbrir(false);
  }

  function mostrarMatrix(){
    fetch("http://127.0.0.1:5000/matrix", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setAnchorVen(false);
  }

  function abrirPDF(){
    window.open(PDF)
  }

  function queyranne(){
    fetch("http://127.0.0.1:5000/que", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.text())
    .then((data) => window.alert(data));
    setanchorAn(false);
  }
  

  /* EditarArco*/
  const handleOpenEditarArco = (event) => {
    setAnchorEditarArco(true);
  };
  //Cancelar
  const handleCloseEditarArcoC = () => {
    setAnchorEditarArco(false);
  };
  /* EliminarArco*/
  const handleOpenEliminarArco = (event) => {
    setAnchorEliminarArco(true);
  };
  //Cancelar
  const handleCloseEliminarArcoC = () => {
    setAnchorEliminarArco(false);
  };
  /* CrearArco*/
  const handleOpenCrearArco = (event) => {
    setAnchorCrearArco(true);
  };
  //Cancelar
  const handleCloseCrearArcoC = () => {
    setAnchorCrearArco(false);
  };
  /* Editar Nodo*/
  const handleOpenEditarNodo = (event) => {
    setAnchorEditarNodo(true);
  };
  //Cancelar
  const handleCloseEditarNodoC = () => {
    setAnchorEditarNodo(false);
  };
  /* Eliminar Nodo*/
  const handleOpenEliminarNodo = (event) => {
    setAnchorEliminarNodo(true);
  };
  //Cancelar
  const handleCloseEliminarNodoC = () => {
    setAnchorEliminarNodo(false);
  };
  /* CrearNodo*/
  const handleOpenCrearNodo = (event) => {
    setAnchorCrearNodo(true);
  };
  //Cancelar
  const handleCloseCrearNodoC = () => {
    setAnchorCrearNodo(false);
  };
  /* ExportarComoPDF*/
  const handleOpenExportarComoPNG = (event) => {
    setAnchorExportarComoPNG(true);
  };
  //Cancelar
  const handleCloseExportarComoPNGC = () => {
    setAnchorExportarComoPNG(false);
  };

  /* ExportarComoPDF*/
  const handleOpenExportarComoPDF = (event) => {
    setAnchorExportarComoPDF(true);
  };
  //Cancelar
  const handleCloseExportarComoPDFC = () => {
    setAnchorExportarComoPDF(false);
  };

  /* ExportarComoExcel*/
  const handleOpenExportarComoExcel = (event) => {
    setAnchorExportarComoExcel(true);
  };
  //Cancelar
  const handleCloseExportarComoExcelC = () => {
    setAnchorExportarComoExcel(false);
  };
  /* GuardarComo*/
  const handleOpenGuardarComo = (event) => {
    setAnchorGuardarComo(true);
  };
  //Cancelar
  const handleCloseGuardarComoC = () => {
    setAnchorGuardarComo(false);
  };

  /* Abrir grafo*/
  const handleOpenAbrir = (event) => {
    setAnchorAbrir(true);
  };
  //Cancelar
  const handleCloseAbrirC = () => {
    setAnchorAbrir(false);
  };

  /* Abrir el cuadro grafo aleatorio*/
  const handleOpenGraAl = (event) => {
    setAnchorGraAl(true);
  };

  /* Cerrar el cuadro grafo aleatorio*/

  //Cancelar
  const handleCloseGraAlC = () => {
    setAnchorGraAl(false);
  };

  /* Abrir el cuadro grafo personalizado*/
  const handleOpenGraPer = (event) => {
    setAnchorGraPer(true);
  };
  /* Cerrar el cuadro grafo personalizado*/
  //Cancelar
  const handleCloseGraPerC = () => {
    setAnchorGraPer(false);
  };

  /* Abri el menu archivo */
  const handleOpenNavMenu = (event) => {
    setanchorNav(event.currentTarget);
  };

  /* Cerrar el menu archivo */

  const handleCloseNavMenu = () => {
    setanchorNav(null);
    setanchorGr(null);
    setanchorEx(null);
  };
  /* Abrir el menu Editar */
  const handleOpenEd = (event) => {
    setAnchorEd(event.currentTarget);
  };

  /* Cerrar el menu Editar */

  const handleCloseElAn = () => {
    setanchorAn(null);
  };
  /* Abrir el menu Herramientas */
  const handleOpenHer = (event) => {
    setAnchorHer(event.currentTarget);
  };

  /* Cerrar el menu Herramienta */

  const handleCloseHer = () => {
    setAnchorHer(null);
  };
  /* Abrir el menu Aplicacion */
  const handleOpenApp = (event) => {
    setAnchorApp(event.currentTarget);
  };

  /* Cerrar el menu Aplicacion */

  const handleCloseApp = () => {
    setAnchorApp(null);
  };
  /* Abrir el menu Ayuda */
  const handleOpenAy = (event) => {
    setAnchorAy(event.currentTarget);
  };

  /* Cerrar el menu Ayuda */

  const handleCloseAy = () => {
    setAnchorAy(null);
  };
  /* Abrir el menu Ventana */
  const handleOpenVen = (event) => {
    setAnchorVen(event.currentTarget);
  };

  /* Cerrar el menu Ventana */

  const handleCloseVen = () => {
    setAnchorVen(null);
  };
  /* Abrir el menu Editar */
  const handleOpenElAn = (event) => {
    setanchorAn(event.currentTarget);
  };

  /* Cerrar el menu Editar */

  const handleCloseEd = () => {
    setAnchorEd(null);
    setanchorEdAr(null);
    setAnchorEdNd(null);
  };
  /* Abrir el submenu NuevoGrafo */

  const handleOpenGr = (event) => {
    setanchorGr(event.currentTarget);
  };
  /* Cerrar el menu NuevoGrafo */

  /* Abrir el submenu Exportar datos */

  const handleOpenEx = (event) => {
    setanchorEx(event.currentTarget);
  };
  /* Abrir el submenu editar nodo */

  const handleOpenEdNd = (event) => {
    setAnchorEdNd(event.currentTarget);
  };
  /* Abrir el submenu editar arco */

  const handleOpenEdAr = (event) => {
    setanchorEdAr(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 10, display: { xs: "flex", md: "flex" } }}
          >
            Grafo
          </Typography>
          {/* Boton archivo */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              edge="end"
              color="inherit"
            >
              Archivo
            </IconButton>
            {/* Menu Archivo */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {/* Items menu archivo */}
              <MenuItem onClick={handleOpenGr}>Nuevo Grafo</MenuItem>
              <MenuItem onClick={handleOpenAbrir}>Abrir</MenuItem>
              <Dialog open={anchorAbrir} onClose={handleCloseAbrirC}>
                <DialogTitle>Abrir Archivo</DialogTitle>
                <DialogContent>
                  <DialogContentText>Escoja el archivo</DialogContentText>
                  <div>
                    <form onSubmit={abrirArchivo}>
                      <input
                        type="text"
                        onChange={(e) => setArchivo(e.target.value)}
                        value={archivo}
                        placeholder="Nombre del archivo"
                        autoFocus
                      />
                      <br></br>
                      <button>Abrir</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <MenuItem onClick={cerrarGrafo}>Cerrar</MenuItem>
              <MenuItem onClick={guardarGrafo}>Guardar</MenuItem>
              <MenuItem onClick={handleOpenGuardarComo}>Guardar Como</MenuItem>
              <Dialog
                open={anchorGuardarComo}
                onClose={handleCloseGuardarComoC}
              >
                <DialogTitle>Guardar grafo</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={guardarComo}>
                      <input
                        type="text"
                        onChange={(e) => setNameGrafo(e.target.value)}
                        value={nameGrafo}
                        placeholder="Nombre del archivo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <MenuItem onClick={handleOpenEx}>Exportar</MenuItem>
            </Menu>
            {/* Menu Exportar */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEx}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEx)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {/*Items menu Exportar */}
              <MenuItem onClick={handleOpenExportarComoExcel}>Excel</MenuItem>
              <Dialog
                open={anchorExportarComoExcel}
                onClose={handleCloseExportarComoExcelC}
              >
                <DialogTitle>Exportar como excel</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={exportarComoExcel}>
                      <input
                        type="text"
                        onChange={(e) => setNameGrafo(e.target.value)}
                        value={nameGrafo}
                        placeholder="Nombre del archivo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <MenuItem onClick={handleOpenExportarComoPNG}>Imagen</MenuItem>
              <Dialog
                open={anchorExportarComoPNG}
                onClose={handleCloseExportarComoPNGC}
              >
                <DialogTitle>Exportar como PNG</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={exportarComoPNG}>
                      <input
                        type="text"
                        onChange={(e) => setNameGrafo(e.target.value)}
                        value={nameGrafo}
                        placeholder="Nombre del archivo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <MenuItem onClick={handleOpenExportarComoPDF}>PDF</MenuItem>
              <Dialog
                open={anchorExportarComoPDF}
                onClose={handleCloseExportarComoPDFC}
              >
                <DialogTitle>Exportar como PDF</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={exportarComoPDF}>
                      <input
                        type="text"
                        onChange={(e) => setNameGrafo(e.target.value)}
                        value={nameGrafo}
                        placeholder="Nombre del archivo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </Menu>
            {/* Menu nuevo grafo */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorGr}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorGr)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              {/*Items menu nuevo grafo */}
              <MenuItem onClick={handleOpenGraAl}>Aleatorio</MenuItem>
              <Dialog open={anchorGraAl} onClose={handleCloseGraAlC}>
                <DialogTitle>Nuevo grafo aleatorio</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={crearGrafo}>
                      <input
                        type="text"
                        onChange={(e) => setNodes(e.target.value)}
                        value={nodes}
                        placeholder="nodes"
                        autoFocus
                      />
                      <br></br>
                      <input
                        type="text"
                        onChange={(e) => setArcos(e.target.value)}
                        value={arcos}
                        placeholder="arcos"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
              <MenuItem onClick={handleOpenGraPer}>Personalizado</MenuItem>
              <Dialog open={anchorGraPer} onClose={handleCloseGraPerC}>
                <DialogTitle>Nuevo grafo aleatorio</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={crearPerso}>
                      <input
                        type="text"
                        onChange={(e) => setNode1(e.target.value)}
                        value={node1}
                        placeholder="Label del nodo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </Menu>
          </Box>
          {/* Boton editar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenEd}
            >
              Editar
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElEd}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElEd)}
              onClose={handleCloseEd}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={handleOpenEdNd}>Nodo</MenuItem>
              <MenuItem onClick={handleOpenEdAr}>Arco</MenuItem>
            </Menu>
            {/* Sub menu Nodo */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEdNd}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEdNd)}
              onClose={handleCloseEd}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={handleOpenCrearNodo}>Crear</MenuItem>
              <Dialog open={anchorCrearNodo} onClose={handleCloseCrearNodoC}>
                <DialogTitle>Crear Nodo</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={crearNodo}>
                      <input
                        type="text"
                        onChange={(e) => setNameNodo(e.target.value)}
                        value={nameNodo}
                        placeholder="Label del nodo"
                        autoFocus
                      />
                      <br></br>
                      <button>Create</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <MenuItem onClick={handleOpenEditarNodo}>Editar</MenuItem>
              <Dialog open={anchorEditarNodo} onClose={handleCloseEditarNodoC}>
                <DialogTitle>Editar Nodo</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={editarNodo}>
                      <input
                        type="text"
                        onChange={(e) => setNameNodo(e.target.value)}
                        value={nameNodo}
                        placeholder="Label del nodo a editar"
                        autoFocus
                      />
                      <br></br>
                      <input
                        type="text"
                        onChange={(e) => setNameNodoNuevo(e.target.value)}
                        value={nameNodoNuevo}
                        placeholder="Nuevo del label del nodo"
                        autoFocus
                      />
                      <button>Editar</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <MenuItem onClick={handleOpenEliminarNodo}>Eliminar</MenuItem>
              <Dialog
                open={anchorEliminarNodo}
                onClose={handleCloseEliminarNodoC}
              >
                <DialogTitle>Eliminar Nodo</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={eliminarNodo}>
                      <input
                        type="text"
                        onChange={(e) => setNameNodo(e.target.value)}
                        value={nameNodo}
                        placeholder="Label del nodo a eliminar"
                        autoFocus
                      />
                      <br></br>
                      <button>Eliminar</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </Menu>
            {/* Sub menu Arco */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorEdAr}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEdAr)}
              onClose={handleCloseEd}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={handleOpenCrearArco}>Crear</MenuItem>
              <Dialog open={anchorCrearArco} onClose={handleCloseCrearArcoC}>
                <DialogTitle>Crear arco</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={crearArco}>
                      <input
                        type="text"
                        onChange={(e) => setOrigenArco(e.target.value)}
                        value={origenArco}
                        placeholder="Origen del arco"
                        autoFocus
                      />

                      <input
                        type="text"
                        onChange={(e) => setFinArco(e.target.value)}
                        value={finArco}
                        placeholder="Llegada del arco"
                        autoFocus
                      />
                      <br></br>
                      <input
                        type="text"
                        onChange={(e) => setPesoArco(e.target.value)}
                        value={pesoArco}
                        placeholder="Nuevo peso del arco"
                        autoFocus
                      />
                      <button>Crear</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <MenuItem onClick={handleOpenEditarArco}>Editar</MenuItem>
              <Dialog open={anchorEditarArco} onClose={handleCloseEditarArcoC}>
                <DialogTitle>Editar arco</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={editarArco}>
                      <input
                        type="text"
                        onChange={(e) => setOrigenArco(e.target.value)}
                        value={origenArco}
                        placeholder="Origen del arco"
                        autoFocus
                      />

                      <input
                        type="text"
                        onChange={(e) => setFinArco(e.target.value)}
                        value={finArco}
                        placeholder="Llegada del arco"
                        autoFocus
                      />
                      <br></br>
                      <input
                        type="text"
                        onChange={(e) => setNuevoOrigenArco(e.target.value)}
                        value={nuevoOrigenArco}
                        placeholder="Nuevo origen del arco"
                        autoFocus
                      />

                      <input
                        type="text"
                        onChange={(e) => setNuevoFinArco(e.target.value)}
                        value={nuevoFinArco}
                        placeholder="Nuevoa llegada del arco"
                        autoFocus
                      />
                      <br></br>
                      <input
                        type="text"
                        onChange={(e) => setPesoArco(e.target.value)}
                        value={pesoArco}
                        placeholder="Nuevo peso del arco"
                        autoFocus
                      />
                      <button>Editar</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>

              <MenuItem onClick={handleOpenEliminarArco}>Eliminar</MenuItem>
              <Dialog
                open={anchorEliminarArco}
                onClose={handleCloseEliminarArcoC}
              >
                <DialogTitle>Eliminar arco</DialogTitle>
                <DialogContent>
                  <DialogContentText>Ingrese los datos</DialogContentText>
                  <div>
                    <form onSubmit={eliminarArco}>
                      <input
                        type="text"
                        onChange={(e) => setOrigenArco(e.target.value)}
                        value={origenArco}
                        placeholder="Origen del arco"
                        autoFocus
                      />

                      <input
                        type="text"
                        onChange={(e) => setFinArco(e.target.value)}
                        value={finArco}
                        placeholder="Llegada del arco"
                        autoFocus
                      />
                      <button>Eliminar</button>
                    </form>
                  </div>
                </DialogContent>
              </Dialog>
            </Menu>
          </Box>

          {/* Boton analizar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenElAn}
            >
              Analizar
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorAn}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorAn)}
              onClose={handleCloseElAn}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={queyranne}>Queyranne</MenuItem>
              <MenuItem onClick={handleCloseElAn}>Algoritmo2</MenuItem>
              <MenuItem onClick={handleCloseElAn}>Algoritmo3</MenuItem>
            </Menu>
          </Box>
          {/* Boton herramienta */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenHer}
            >
              Herramienta
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorHer}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorHer)}
              onClose={handleCloseHer}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={handleCloseHer}>Ejecucion</MenuItem>
            </Menu>
          </Box>
          {/* Boton aplicacion */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenApp}
            >
              Aplicacion
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorApp}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorApp)}
              onClose={handleCloseApp}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={handleCloseApp}>Aplicacion 1 </MenuItem>
              <MenuItem onClick={handleCloseApp}>Aplicacion 2 </MenuItem>
              <MenuItem onClick={handleCloseApp}>Aplicacion 3 </MenuItem>
            </Menu>
          </Box>
          {/* Boton ventana */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenVen}
            >
              Ventana
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorVen}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorVen)}
              onClose={handleCloseVen}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              
              <MenuItem onClick={mostrarMatrix}>Tabla</MenuItem>
            </Menu>
          </Box>
          {/* Boton ayuda */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenAy}
            >
              Ayuda
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorAy}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorAy)}
              onClose={handleCloseAy}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem onClick={abrirPDF}>Ayuda</MenuItem>
              <MenuItem > <a href="https://www.grapheverywhere.com/que-son-los-grafos/"><Button>Acerca Grafos</Button></a></MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
     
    </AppBar>
    
  );
};
export default Navbar;
