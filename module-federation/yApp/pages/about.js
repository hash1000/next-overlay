import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "200px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px",fontFamily:'monospace' }}>
          <h1 style={{ textAlign: "center" }}>About</h1>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
