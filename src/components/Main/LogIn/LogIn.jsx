import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import LogInForm from "./LogInForm";

const LogIn = () => {

  const [error, setError] = useState('');

  return (
    <section id="login-container">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={4} md={7} id="login-background"/>
        <CssBaseline />
        <LogInForm />
      </Grid>
    </section>
  );
};

export default LogIn;
