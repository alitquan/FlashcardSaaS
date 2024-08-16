import Image from "next/image";
import getStripe from "./utils/get-stripe";
import css from "/app/globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="lg" className="animated-gradient">
      <Head>
        <title>Smart Flashcard</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar>
        <Toolbar className="navbar">
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              color: "white",
              fontSize: 30,
            }}
          >
            Smart Flashcard
          </Typography>
          <SignedOut>
            <Button color="inherit" href="sign-in">
              <Typography
                fontSize={20}
                color={"black"}
                sx={{
                  flexGrow: 1,
                  mt: 2,
                  padding: 1,
                  color: "white",
                  border: "1px solid",
                  marginRight: "5px",
                }}
              >
                Login
              </Typography>
            </Button>
            <Button color="inherit" href="sign-up">
              <Typography
                fontSize={20}
                color={"black"}
                sx={{
                  flexGrow: 1,
                  mt: 2,
                  padding: 1,
                  color: "white",
                  // backgroundColor: "black",
                  border: "1px solid",
                }}
              >
                Sign Up
              </Typography>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box textAlign="center" my={4}>
        <Typography
          variant="h2"
          marginTop={15}
          marginBottom={2}
          color={"darkred"}
          className="title"
        >
          Welcome To Smart Flashcard
        </Typography>
        <Typography variant="h5" marginBottom={2} color={"darkred"}>
          The easiest way to make flashcards from your text
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            color: "white",
            backgroundColor: "black",
            border: "1px solid",
            "&:hover": {
              backgroundColor: "grey", // Change the hover background color
              color: "darkgrey", // Optionally change the text color on hover
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ mb: 5, color: "darkred", fontWeight: "bold" }}
          className="title"
        >
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                my: 6,
                p: 3,
                border: "1px solid",
                borderColor: "white",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography
                variant="h5"
                marginBottom={2}
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
                className="title"
              >
                Easy Text Input
              </Typography>
              <Typography>
                Simply input your text and let our software do the rest of the
                work!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                my: 6,
                p: 3,
                border: "1px solid",
                borderColor: "white",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography
                variant="h5"
                marginBottom={2}
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
                className="title"
              >
                Accessible Anywhere
              </Typography>
              <Typography>
                Access your flashcards from any device. Study on the go with
                ease.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                my: 6,
                p: 3,
                border: "1px solid",
                borderColor: "white",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography
                variant="h5"
                marginBottom={2}
                sx={{ fontWeight: "bold", textDecoration: "underline" }}
                className="title"
              >
                Smart Flashcards
              </Typography>
              <Typography>
                Our AI intelligently breaks down your text into concise
                flashcards
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ mb: 5, color: "darkred", textDecoration: "underline" }}
          className="title"
        >
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                my: 6,
                p: 3,
                border: "1px solid",
                borderColor: "white",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography variant="h5" className="title">
                Basic
              </Typography>
              <Typography variant="h6">$5 / Month</Typography>
              <Typography>
                Access to basic flashcard features and limited storage
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  color: "white",
                  border: "1px solid",
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "grey", // Change the hover background color
                    color: "darkgrey", // Optionally change the text color on hover
                  },
                }}
              >
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                my: 6,
                p: 3,
                border: "1px solid",
                borderColor: "white",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography variant="h5" className="title">
                Pro
              </Typography>
              <Typography variant="h6">$10 / Month</Typography>
              <Typography>
                Unlimited flashcards and storage with priority
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  color: "white",
                  border: "1px solid",
                  backgroundColor: "back",
                  "&:hover": {
                    backgroundColor: "grey", // Change the hover background color
                    color: "darkgrey", // Optionally change the text color on hover
                  },
                }}
              >
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
