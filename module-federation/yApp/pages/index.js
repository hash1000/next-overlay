import { useState } from "react";
import Head from "next/head";
import { Box, Button } from "@mui/material";
import About from "./about";

const Home = () => {
  const [isYModalOpen, setYModalOpen] = useState(false);

  const openYModal = () => {
    setYModalOpen(true);
  };

  return (
    <>
      <div>
        <Head>
          <title>Y-app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="hero">
          <h1 className="title">Welcome to Y-application </h1>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              marginTop: "20rem",
              fontFamily:'monospace' 
            }}
          >
            <Button variant="contained" onClick={openYModal}>
              About Us
            </Button>
          </Box>
          {isYModalOpen && (
            <Box
              sx={{
                position: "fixed",
                top: "104px",
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
              <About />
            </Box>
          )}
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin-top: 100px;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
