import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { Theme } from '@mui/material/styles';
import { appTheme } from '../../../theme';

const styles = (theme: Theme) => ({
  root: {
      margin: 0,
      padding: theme.spacing(2),
  },
  closeButton: {
      position: 'absolute' as const,
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DialogTitle = withStyles(styles)((props: any) => {
  const { children, classes, onClose, ...other } = props;
  return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
            {children}
          </Typography>
          {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          ) : null}
      </MuiDialogTitle>
  );
});

const DialogContent = withStyles(
  (theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
  }),
  { defaultTheme: appTheme }
)(MuiDialogContent);

type CustomDialogProps = {
  click: () => void;
  display: boolean;
  title: React.ReactNode;
  text: React.ReactNode;
};

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  useStyles();
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


