import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {

    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/dashboard")
  };


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login Page
          </Typography>
          <form onSubmit={handleLogin}>
            <Box mb={3}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
