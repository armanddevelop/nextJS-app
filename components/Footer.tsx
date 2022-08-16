import GitHubIcon from "@mui/icons-material/GitHub";
import { Grid } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container-footer">
      <Grid container>
        <Grid md={3}>
          <h4>Nosotros</h4>
          <Link href="/About">Cononce mas</Link>
        </Grid>
        <Grid md={3}>
          <h4>Servicios</h4>
          <Link href="/">Todos los productos</Link>
        </Grid>
        <Grid md={3}>
          <h4>Hecho para</h4>
          <p>
            <a href="https://platzi.com/" target="_blank">
              Platzi Curso de Nextjs
            </a>
          </p>
        </Grid>
        <Grid md={3}>
          <GitHubIcon fontSize="large" />
          <div>
            <a href="https://github.com/armanddevelop" target="_blank">
              GitHub
            </a>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
