import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type CustomDialogProps = {
  click: () => void;
  display: boolean;
  title: React.ReactNode;
  text: React.ReactNode;
};

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  return (
    <Dialog
      onClose={props.click}
      aria-labelledby="customized-dialog-title"
      open={props.display}
      PaperProps={{
        sx: {
          bgcolor: 'background.paper',
          color: 'text.primary',
        },
      }}
    >
      <DialogTitle
        id="customized-dialog-title"
        sx={{
          m: 0,
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {props.title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={props.click}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 2 }}>
        <Box sx={{ color: 'text.primary' }}>
          {props.text}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;


