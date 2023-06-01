import { AppBar, Toolbar } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <h2>Notes</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
