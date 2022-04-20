import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControl } from "@material-ui/core";
import moment from "moment";
import FormSubmit from "../FormSubmit";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export default function EditModal(props) {
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

  console.log(props);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // const history = useHistory();
    alert("Info Submitted!");
    setSubmitted(true);
    console.log(data);
    // console.log(date);

    // history.push("/submit");
    // window.location.reload(false);
  };

  const { recruiterName, email, company, salaryRange, startingDate } = data;

  if (submitted) {
    return <FormSubmit data={data} />;
  }
  if (!submitted) {
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
                    focused
                    onChange={handleChange}
                    value={startingDate}
                    id="filled-basic"
                    // variant="filled"
                    variant="outlined"
                    label="Starting Date"
                    // emptyLabel="Starting Date"
                    name="startingDate"
                    type="date"
                    required
                  />
                </FormControl>
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
}
