import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 850,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function FormSubmit(props) {
  const [open, setOpen] = React.useState(true);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

  console.log(props);
  return (
    <div className="formSubmit">
      {/* <Button onClick={handleOpen}>Contact Form</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for your submission!
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Recruiter Name: {props.data.recruiterName}
          </Typography>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off">
            <Button variant="contained" size="large" onClick={handleClose}>
              Back to Resume
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
