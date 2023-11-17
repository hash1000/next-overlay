"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Home() {
  const [isYModalOpen, setYModalOpen] = useState(false);

  const openYModal = () => {
    setYModalOpen(true);
  };

  const closeYModal = () => {
    setYModalOpen(false);
  };

  return (
    <main className={styles.main}>
      <h1>Application X</h1>

      <Button onClick={openYModal} variant="contained">
        Open Y Application
      </Button>
      {isYModalOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color:'black'
            }}
            onClick={closeYModal}
          >
            <ClearIcon />
          </Button>

          <Divider
            sx={{
              position: "absolute",
              top: "50px",
              border: "2px solid black",
              width: "100%",
            }}
            textAlign="left"
          ></Divider>
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="http://localhost:3001/"
          ></iframe>
        </Box>
      )}
    </main>
  );
}
