import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import green from '@material-ui/core/colors/green';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from "@material-ui/core/Radio";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import updateTasks from "../../redux/actionCreators/UpdateTasks"

const styles = theme  => ({
  root: {
    color: green[600],
    '&$checked': {
      color: green[500]
    },
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  checked: {},
});

class FormDialog extends React.Component {

  handleClose = () => {
    this.props.closeDialog()
  };

  selectChange = e => {
    this.setState({status: e.target.value})
  };

  componentDidMount() {
    this.setState({
      selected: this.props.task.selected === undefined ? false : this.props.task.selected,
      status: this.props.task.status === undefined ? "not started" : this.props.task.status,
      title: this.props.task.title,
      description: this.props.task.description,
      _id: this.props.task._id,
      image: this.props.task.image,
      userId: this.props.task.userId
    })
  }

  editTaskDone = () => {
    this.props.editTask(
      this.props.tasks.map(task => {
        if(task._id === this.state._id)
          return this.state;
        return task
      }));
    updateTasks(this.state);
    this.handleClose()
  };

  changeFields = (e) => {
    const value = e.target.value === "true" ? true : e.target.value === "false" ? false : e.target.value;
    this.setState({[e.target.id]: value})
  };

  state = {
    selected: 'true',
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Редактирование</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="title"
              value={this.state.title}
              onChange={this.changeFields}
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              value={this.state.description}
              onChange={this.changeFields}
              type="text"
              fullWidth
            />
            <Typography type="p">
              Выбрано:
              <Radio
                checked={this.state.selected === true}
                onChange={this.changeFields}
                value={true}
                name="radio-button-demo"
                id="selected"
                classes={{
                  root: classes.root,
                  checked: classes.checked,
                }}
              />
              <Radio
                checked={this.state.selected === false}
                onChange={this.changeFields}
                value={false}
                name="radio-button-demo"
                id="selected"
                color="primary"
              />
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="status">Статус</InputLabel>
              <Select
                native
                value={this.state.status}
                id="status"
                onChange={this.selectChange}
                inputProps={{
                  name: 'status',
                  id: 'status',
                }}
              >
                <option value="not started">Not started</option>
                <option value="in progress">In progress</option>
                <option value="done">Done</option>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.editTaskDone} color="primary">
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog)