import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const styles = (theme) => ({
  root: {
      margin: 0,
      padding: theme.spacing(2),
  },
  closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          ) : null}
      </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
      padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const CustomDialog = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  return (
    <div>
      <Dialog onClose={props.click} aria-labelledby="customized-dialog-title" open={props.display}>
        <DialogTitle id="customized-dialog-title" onClose={props.click}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.text}
          </Typography>
        </DialogContent>
      </Dialog>

    </div>
  );
}
export default CustomDialog;