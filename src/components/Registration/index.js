import React, { Component } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Registration extends Component {
  componentDidMount() {
    document.title = "Registration";
  };

  state = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: ""
  };

  onListNameSubmit = (e) => {
    e.preventDefault();
    const {name, surname, email, phone, password} = this.state;
    return name.length && surname.length && email.length && password.length && phone.length ? this.props.regUser(this.state): null
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
                placeholder="Name"
                onChange={this.handleChange}
              />
              <OutlinedInput
                labelWidth={10}
                fullWidth
                placeholder="Surname"
                onChange={this.handleChange}
              />
              <OutlinedInput
                labelWidth={10}
                fullWidth
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <OutlinedInput
                labelWidth={10}
                fullWidth
                type="tel"
                placeholder="Phone"
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
                Registration
              </Button>
            </form>
          </Grid>
        </Grid>


      </div>
    );
  }
}

export default Registration;
