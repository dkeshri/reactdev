import { Input, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../../../assets/css/Login.css'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://dkeshri.github.io/Demo/">
        Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));
const style = {
  img: { "height": "120px", "width": "250px" }
}

export default function Login() {
  const [userDetails, setUserDetails] = useState({ userName: '', password: '' });
  const classes = useStyles();
  const onUserNameChange = e => {
    console.log(e.target.value);
    setUserDetails({ userName: e.target.value, ...userDetails });
  }
  const onPasswordChange = e => {
    setUserDetails({ password: e.target.value, ...userDetails });
  }
  const onSubmit = (e) => {
    console.log(userDetails);
  }
  return (
    <div className="boxPosition box">
      <div className="content">
        <img style={style.img} src={require('../../../assets/img/logo.png')} />
        <h1 id="signLabel">Sign In</h1>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onUserNameChange}
            size="small"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onPasswordChange}
            size="small"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
                        </Button>
          <div className="loginSetup">
            <Link className="link" href="#" variant="body2">
              Forgot password?
                                 </Link>
            <Link className="link" href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </form>
        <Box mt={4}>
          <Copyright />
        </Box>
      </div>
    </div>
  )
}


