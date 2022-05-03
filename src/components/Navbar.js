import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
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

  /* Opcion aleatorio */
  const crearAleatorio = () => {
    
  };
  const abrirArchivo = () => {
    
    return 'hola'
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
              <MenuItem onClick={handleCloseNavMenu}>Abrir</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Cerrar</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Guardar</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Guardar Como</MenuItem>
              <MenuItem onClick={handleOpenEx}>Exportar</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Importar</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Inicio</MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>Imprimir</MenuItem>
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
              <MenuItem onClick={crearAleatorio}>Excel</MenuItem>
              <MenuItem onClick={crearAleatorio}>Imagen</MenuItem>
              <MenuItem onClick={crearAleatorio}>PDF</MenuItem>
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
              <MenuItem onClick={crearAleatorio}>Aleatorio</MenuItem>
              <MenuItem onClick={crearAleatorio}>Personalizado</MenuItem>
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
              <MenuItem onClick={crearAleatorio}>Deshacer</MenuItem>
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
              <MenuItem onClick={crearAleatorio}>Crear</MenuItem>
              <MenuItem onClick={crearAleatorio}>Editar</MenuItem>
              <MenuItem onClick={crearAleatorio}>Eliminar</MenuItem>
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
              <MenuItem onClick={crearAleatorio}>Crear</MenuItem>
              <MenuItem onClick={crearAleatorio}>Editar</MenuItem>
              <MenuItem onClick={crearAleatorio}>Eliminar</MenuItem>
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
              <MenuItem onClick={handleCloseElAn}>Algoritmo1</MenuItem>
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

              <MenuItem onClick={handleCloseVen}>Grafica</MenuItem>
              <MenuItem onClick={handleCloseVen}>Tabla</MenuItem>
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

              <MenuItem onClick={handleCloseAy}>Ayuda</MenuItem>
              <MenuItem onClick={handleCloseAy}>Acerca Grafos</MenuItem>
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
