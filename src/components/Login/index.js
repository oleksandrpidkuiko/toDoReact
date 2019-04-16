import React, { Component } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Login extends Component {
  componentDidMount() {
    document.title = "Login";
  };

  componentDidUpdate() {
    const {token} = this.props;
    if(token.length)
      this.props.history.push('/tasks/')
  }

  state = {
    login: "",
    password: ""
  };

  onListNameSubmit = (e) => {
    e.preventDefault();
    return this.state.login.length && this.state.password.length ? this.props.addUser(this.state): null
  };

  handleChange = (e) =>{
    const {placeholder, value} = e.target;
    this.setState({[placeholder.toLowerCase()]: value.toLowerCase()})
  };

  render() {
    return (
      <div style={{margin: 40}}>

          <Grid container justify="center" spacing={24}>
            <Grid item xs={3} >
              <form onSubmit={this.onListNameSubmit}>
              <OutlinedInput
                labelWidth={10}
                fullWidth
                placeholder="Login"
                onChange={this.handleChange}
              />
              <OutlinedInput
                labelWidth={8}
                type="password"
                fullWidth
                placeholder="Password"
                onChange={this.handleChange}
              />
              <Button color="primary"
                      size='large'
                      onClick={this.onListNameSubmit}
                      fullWidth
              >
                Login
              </Button>
              </form>
            </Grid>
          </Grid>


      </div>
    );
  }
}

export default Login;
