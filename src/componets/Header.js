import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {
  makeStyles,
} from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor:"pointer",
  }
}));

const Header = () => {
  const clases = useStyles()
  // const history = useHistory()
  // const darkTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#fff",
  //     },
  //     type: "dark"
  //   },
  // });
  return (
    // <ThemeProvider>
      <AppBar color='inherit' position='static'>
        <Container>
          <Toolbar>
            <Typography className={clases.title} >
              Crypto Hunter 1
            </Typography>
            <Select variant='outlined' style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}>
              <MenuItem>USD</MenuItem>
              <MenuItem>VND</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    // </ThemeProvider>
  );
};

export default Header
