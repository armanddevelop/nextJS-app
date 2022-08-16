import { AppBar, IconButton, Toolbar } from "@mui/material";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Link href="/">
            <IconButton>
              <StorefrontSharpIcon fontSize="large" color="success" />
              <p className="title">Avo Store</p>
            </IconButton>
          </Link>
          <Link href="/About">
            <a className="home">About</a>
          </Link>
        </Toolbar>
      </AppBar>
      <style jsx>{`
        .home {
          position: absolute;
          right: 5%;
        }
        .title {
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
