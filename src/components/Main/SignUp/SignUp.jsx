import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import regex from "../../../utils/regex";

const SignUp = () => {

  const [emailErr, setEmailErr] = useState("");
  const [userErr, setUserErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");

  const navigate = useNavigate();

  const checkErrors = (email, username, pwd) => {
    !email ? setEmailErr("Email is required.") : setEmailErr("");
    !username ? setUserErr("Username is required.") : setUserErr("");
    !pwd ? setPwdErr("Password is required.") : setPwdErr("");
    !regex.email(email) ? setEmailErr("Invalid email format.") : "";
    !regex.username(username)
      ? setUserErr(
          "Username must only contain letters, numbers, '.', '_' or '-'."
        )
      : "";
    !regex.pwd(pwd)
      ? setPwdErr(
          "Password must contain a minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
        )
      : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const username = data.get("username");
    const password = data.get("password");

    checkErrors(email, username, password);

    if (email && username && password) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/signup`,
          JSON.stringify({ email, username, password }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (res.data.success === true) {
          return navigate('/login');
        }
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message;
        msg === "Email already registered."
          ? setEmailErr("Email already registered.")
          : setEmailErr("");
        msg === "Username already in use."
          ? setUserErr("Username already in use.")
          : setUserErr("");
      }
    }
  };

  return (
    <section id="signup-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
                <p className="signup-errMsg">{userErr ? userErr : ""}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <p className="signup-errMsg">{emailErr ? emailErr : ""}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                <p className="signup-errMsg">{pwdErr ? pwdErr : ""}</p>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SignUp;
