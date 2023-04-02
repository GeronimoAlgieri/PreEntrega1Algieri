import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ background: "aqua", height: "100px", display: "flex" }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <img
            style={{
              width: "90px",
              height: "90px",
              marginRight: "530px",
              marginTop: "5px",
            }}
            src="https://res.cloudinary.com/ddzkdyajp/image/upload/c_scale,h_127/v1680386007/Screenshot_2023-04-01_185312_mv4y6w.png"
            alt=""
          />
        </Grid>
        <Grid style={{ marginTop: "20px" }} item xs={7}>
          <ul
            className="anclor"
            style={{ display: "flex", gap: "30px", marginLeft: "100px" }}
          >
            <li style={{ listStyle: "none" }}>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Inicio
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Nosotros
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Productos
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                Contactanos
              </a>
            </li>
          </ul>
        </Grid>
        <Grid style={{ marginTop: "32px" }} item xs={1}>
          <CartWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
