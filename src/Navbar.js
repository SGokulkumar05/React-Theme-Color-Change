import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@mui/material/Switch";
import { AppBar, Button,Card,colors,TextField ,Toolbar} from "@mui/material";
import LockSharpIcon from '@mui/icons-material/LockSharp';
import Color from './color.js';
const UseStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    position:"absolute",
    right:10,
  },
  form:{
    marginTop:20,
    alignItems:"center",
    position:"absolute"
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  root1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    width:345,
    height:430,
  },
  center:{
    alignItems:"center",
    justifyContent:"center",
  },
}));
export default function DynamicThemeNesting() {
  const [success, setSuccess] = React.useState(false);
  const classes = UseStyles();
  const theme = createTheme({
    palette: {
      primary: {
        main: localStorage.getItem("hexatheme"),
      },
    },
  });
 
  return (
    
    <React.Fragment>
      <ThemeProvider theme={theme} >
        <AppBar position="static" flexGrow="1" > 
        <Toolbar> 
          <h3> DEV ADMIN</h3>
      </Toolbar>
      </AppBar>
        <div position="static"  className={classes.root}>
          <Card  className={classes.root1} >
          <LockSharpIcon color="primary" sx={{ fontSize: 50 }}></LockSharpIcon>
            <form  className={classes.root}>
              <TextField label="First Name" variant="standard" required /><br/>
              <TextField label="Last Name" variant="standard" required /><br/>
              <TextField label="Email" variant="standard" type="email" required /><br/>
              <TextField label="Password" variant="standard" type="password" required /><br/>
              <Button variant="contained" >
                Signup
              </Button>
            </form>
          </Card>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
