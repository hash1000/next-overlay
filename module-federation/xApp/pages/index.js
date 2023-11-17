import React, { useState } from "react";
import Head from "next/head";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import dynamic from "next/dynamic";

let RemoteApp = () => null;
if (process.browser) {
  RemoteApp = dynamic(() => import("yApp/"));
}

const Home = () => {
  const [isYModalOpen, setYModalOpen] = useState(false);

  const openYModal = () => {
    setYModalOpen(true);
  };

  const closeYModal = () => {
    setYModalOpen(false);
  };

  return (
    <div>
      <Head>
        <title>X-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="title">Welcome to X-application </h1>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            marginTop: "20rem",
          }}
        >
          <Button onClick={openYModal} variant="contained">
            Y-application
          </Button>
        </Box>
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
                color: "black",
              }}
              onClick={closeYModal}
            >
              <ClearIcon />
            </Button>

            <Divider
              sx={{
                position: "absolute",
                top: "100px",
                border: "2px solid black",
                width: "100%",
              }}
              textAlign="left"
            ></Divider>
            <RemoteApp />
          </Box>
        )}
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
