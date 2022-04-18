import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    recruiterName: "",
    email: "",
    company: "",
    salaryRange: "",
    startingDate: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Info Submitted!");
  };

  const { recruiterName, email, company, salaryRange, startingDate } = data;

  return (
    <div>
      <Button onClick={handleOpen}>Contact Form</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Form
          </Typography>
          <form onSubmit={submit}>
            <Box
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={recruiterName}
                  id="outlined-basic"
                  label="Recruiter Name"
                  variant="outlined"
                  name="recruiterName"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={email}
                  id="filled-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={company}
                  id="filled-basic"
                  label="Company"
                  variant="outlined"
                  name="company"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={salaryRange}
                  id="filled-basic"
                  label="Salary Range"
                  variant="outlined"
                  name="salaryRange"
                  type="text"
                  required
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={handleChange}
                  value={startingDate}
                  id="filled-basic"
                  label="Starting Date"
                  variant="outlined"
                  name="startingDate"
                  type="text"
                  required
                />
              </FormControl>
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
