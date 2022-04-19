import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl } from "@material-ui/core";
import FormSubmit from "../FormSubmit";

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
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    recruiterName: "",
    email: "",
    company: "",
    salaryRange: "",
    startingDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // setData({
    //   ...data,
    //   // Trimming any whitespace
    //   [e.target.name]: e.target.value.trim(),
    // });
  };

  const submit = (e) => {
    e.preventDefault();
    alert("Info Submitted!");
    setSubmitted(true);
    console.log(data.recruiterName);
  };

  const { recruiterName, email, company, salaryRange, startingDate } = data;

  //   if (submitted) {
  //     return <FormSubmit />;
  //   }
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
              {/* <FormControl>
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    id="filled-basic"
                    label="Starting Date"
                    variant="outlined"
                    name="startingDate"
                    // value={startingDate}
                    // onChange={handleChange}
                    value={data}
                    onChange={(newValue) => {
                      setData(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl> */}
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
              {/* {submitted && <p>"Name: " {data.recruiterName}</p>} */}
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
