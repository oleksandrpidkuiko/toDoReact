import React, { Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormDialog from "../../redux/containers/FormDialog"
import deleteTasks from "../../redux/actionCreators/DeleteTask"

const styles = {
  card: {
    minWidth: "auto",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Task extends Component{
  state={
    dialog: false
  };

  closeDialog= () => {
    this.setState({dialog: false})
  };

  openDialog= () => {
    this.setState({dialog: true})
  };

  deleteThisTask = () => {
    this.props.updateTasks(this.props.task, this.props.tasks);
    deleteTasks(this.props.task)
  };

  render(){
  const { classes, task } = this.props;
  const clr = task.selected ? "error" : "secondary";
  return (
    <Fragment>
    <Card className={classes.card} >
      <CardContent>
        <Typography variant="h5" color={clr} component="h2">
          {task.title}
        </Typography>
        <Typography component="p">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={this.openDialog} size="small">Редактировать</Button>
        <Button size="small" onClick={this.deleteThisTask}>Удалить</Button>
      </CardActions>
    </Card>
      <FormDialog
        task={task}
        isOpen={this.state.dialog}
        closeDialog={ this.closeDialog}
      />
    </Fragment>
  );
}
}

Task.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Task);
