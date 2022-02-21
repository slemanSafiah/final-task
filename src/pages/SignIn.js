import { forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/userContext";
import MuiAlert from "@mui/material/Alert";
import {
  Box,
  Button,
  InputLabel,
  Input,
  FormControl,
  InputAdornment,
  IconButton,
  Snackbar,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../App.css";

function SignIn() {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    name: "",
    job: "",
    password: "",
    showPassword: false,
  });
  const hist = useNavigate();

  const { login } = useAuth();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (props) => (event) => {
    setValues({
      ...values,
      [props]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    setValues({
      name: "",
      job: "",
      password: "",
    });

    //add login logic
    let result = await login(values.name, values.job, values.password);
    if (result === "token") {
      hist("/Main-page");
    } else {
      handleClick();
    }
  };

  return (
    <div className="signin-page">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "400px" },
        }}
      >
        <div className="form">
          <div className="form-background"></div>
          <div className="title">Login</div>
          <div className="form-input">
            <div className="input">
              <FormControl className="input">
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  required
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </FormControl>
            </div>
            <div className="input">
              <FormControl className="input">
                <InputLabel htmlFor="email">Job</InputLabel>
                <Input
                  required
                  id="job"
                  type="text"
                  value={values.job}
                  onChange={handleChange("job")}
                />
              </FormControl>
            </div>
            <FormControl className="input" variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                required
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className="login-btn">
            <Button variant="contained" onClick={handleSubmit}>
              {/* add login logic */}
              submit
            </Button>
          </div>
        </div>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          check your information
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SignIn;
