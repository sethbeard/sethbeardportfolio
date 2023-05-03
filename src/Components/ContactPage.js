import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { init } from "@emailjs/browser";
import "../Sass/Contact/Contact.css";
import axios from "axios";
init("7lmPSi46cuFfXFqQa");

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  formSubmit: false,
  success: false,
};

function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const validate = () => {
    let temp = {};
    temp.name = values.name ? "" : "A Name Is Required";
    temp.email =
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/.test(values.email) &&
      values.email
        ? ""
        : "Please Provide A Valid Email";
    temp.subject = values.subject ? "" : "Please Include A Subject";
    temp.message = values.message ? "" : "The Message Cannot Be Blank";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handleInputChange = (e) => {
    let value = e.target.name;
    if (value === "Name") {
      setValues({ ...values, name: e.target.value });
    } else if (value === "Subject") {
      setValues({ ...values, subject: e.target.value });
    } else if (value === "Email") {
      setValues({ ...values, email: e.target.value });
    } else if (value === "Message") {
      setValues({ ...values, message: e.target.value });
    } else {
      console.log("oops");
    }
    setFormData({
      name: values.name,
      subject: values.subject,
      email: values.email,
      message: values.message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      console.log(errors);
    } else {
      await axios({
        method: "POST",
        url: "https://peaceful-basin-54310.herokuapp.com/contact",
        data: formData,
      })
        .then((response) => console.log(response.data))
        .then(setValues({ ...values, success: true }));
    }
  };
  return (
    <div className="contactPage section" id="Contact">
      <span className="pageTitle">Contact Me</span>
      {values.success ? (
        <p className="successMessage">
          Thank you for your submission!
          <br /> I will get back to you shortly.
        </p>
      ) : (
        <ThemeProvider theme={darkTheme}>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              className="textField"
              name="Name"
              label="Name"
              value={values.name}
              onChange={handleInputChange}
              fullWidth
              autoComplete="none"
              {...(errors.name && {
                error: true,
                helperText: errors.name,
              })}
            />

            <TextField
              className="textField"
              label="Email"
              name="Email"
              value={values.email}
              onChange={handleInputChange}
              fullWidth
              autoComplete="none"
              {...(errors.email && {
                error: true,
                helperText: errors.email,
              })}
            />
            <TextField
              className="textField"
              label="Subject"
              name="Subject"
              value={values.subject}
              onChange={handleInputChange}
              fullWidth
              autoComplete="none"
              {...(errors.subject && {
                error: true,
                helperText: errors.subject,
              })}
            />
            <TextField
              className="textField"
              label="Message"
              name="Message"
              value={values.message}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={5}
              autoComplete="none"
              {...(errors.message && {
                error: true,
                helperText: errors.message,
              })}
            />

            <Button className="submitButton" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </ThemeProvider>
      )}
    </div>
  );
}

export default ContactPage;
