import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import React from "react";
import "./FormSubmit.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function FormSubmit(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    window.location.reload(false);
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Container maxWidth="sm" fixed>
          <Box sx={style} className="formSubmit">
            <Typography id="modal-modal-message" variant="h6" component="h2">
              Thanks for your submission!
            </Typography>
            <Typography id="modal-modal-name" variant="h6" component="h2">
              Recruiter Name:{" "}
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>
                {props.data.recruiterName}
              </span>
            </Typography>
            <Typography id="modal-modal-email" variant="h6" component="h2">
              Email:{" "}
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>
                {props.data.email}
              </span>
            </Typography>
            <Typography id="modal-modal-company" variant="h6" component="h2">
              Company:{" "}
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>
                {props.data.company}
              </span>
            </Typography>
            <Typography id="modal-modal-salary" variant="h6" component="h2">
              Salary Range:{" "}
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>
                {props.data.salaryRange}
              </span>
            </Typography>
            <Typography id="modal-modal-date" variant="h6" component="h2">
              Starting Date:{" "}
              <span style={{ fontWeight: "bold", color: "#1976d2" }}>
                {props.data.startingDate}
              </span>
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
        </Container>
      </Modal>
    </>
  );
}
