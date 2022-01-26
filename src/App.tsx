import React from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Navbar from "./components/navigation/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: "2em" }}>
        <Typography variant="h3" color="initial">
          Dashboard
        </Typography>
      </Container>
    </>
  );
}

export default App;
