import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import bacgroundimage from '../../../Assets/imgs/background_login.JPG';
import { getLogin } from "../Services/Login.js"

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '100vh'
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    minHeight: '100vh',
    paddingLeft: 30,
    paddingRight: 30
  },
  leftBg: {
    backgroundColor: '#c81d2b',
    backgroundImage: `url(${bacgroundimage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-Repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  rightBg: {
    [theme.breakpoints.down('sm')]: {
      width: '100vh'
    },
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = () => event => {
	  const state = this.state;
	  state[event.target.name] = event.target.value;
    this.setState(state);
    // console.log(event.target.name);
  }
  handleLogin = () => {
    let data = {
      email : this.state.email,
      password : this.state.password
    }
    getLogin(data);
  }
  render() {

    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Grid container className={classes.root} spacing={0}>
          <Grid item lg={9} md={8} sm={12} className={classNames(classes.paper, classes.leftBg)} alignItems="center" justify="center">
          </Grid>
          <Grid item lg={3} md={4} sm={12} className={classes.paper} alignItems="center" justify="center">
            <Avatar alt="Remy Sharp" src="https://dtq2i388ejbah.cloudfront.net/images/favicon.png" className={classes.bigAvatar} />
            <Typography component="h1" variant="h5" style={{paddingTop: 25}}>
              Halaman Login
            </Typography>
            <form className={classes.form} action="/" method="POST" onSubmit={(e) => { e.preventDefault(); this.handleLogin();}}>
            <TextField
              required
              id="email"
              label="Alamat Email"
              name="email"
              autoComplete = "email"
              autoFocus
              fullWidth
              margin="dense"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange('email')}
              />
            < TextField
              required
              type="password"
              id = "password"
              label = "Password"
              name = "password"
              autoComplete = "current-password"
              autoFocus
              value={this.state.password}
              onChange={this.handleChange('password')}
              fullWidth
              margin = "dense"
              variant = "outlined"
              />
              <FormControlLabel control={<Checkbox value="remember" color="secondary" />} label="Ingat Login Saya" />
              <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.submit} >
              Sign in
              </Button>
            </form>
          </Grid>

        </Grid>
      </main>
    );
  }

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
