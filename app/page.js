import Image from "next/image";
import Link from 'next/link';
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
import Dashboard from './components/dashboard' 
import Selection from './components/selection' 
import Navbar from './components/navbar'
export default function Home() {
  return (
    <Container maxWidth="lg" className="animated-gradient">
      <Head>
        <title>SmartFlash </title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
	 
	  <Navbar />

      <Box textAlign="center" my={4}>
        <Typography
          variant="h2"
          marginTop={15}
          marginBottom={2}
          color={"darkred"}
          className="title"
          fontSize={60}
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
            color: "black",
            p: 2,
            backgroundColor: "white",
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                my: 6,
                p: 15,
                border: "1px solid",
                borderColor: "black",
                borderRadius: 4,
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
                Simply input your text or files and let our software do the rest
                of the work!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                my: 6,
                p: 15,
                border: "1px solid",
                borderColor: "black",
                borderRadius: 4,
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
                p: 15,
                border: "1px solid",
                borderColor: "black",
                borderRadius: 4,
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
          sx={{
            mb: 5,
            color: "darkred",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
          className="title"
        >
          Pricing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                my: 6,
                p: 15,
                border: "1px solid",
                borderColor: "black",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography variant="h4" className="title" paddingBottom={3}>
                Basic
              </Typography>
              <Typography variant="h5" paddingBottom={3}>
                $5 / Month
              </Typography>
              <Typography variant="h6" paddingBottom={3}>
                Access to basic flashcard features and limited storage
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  color: "black",
                  border: "1px solid",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "grey", // Change the hover background color
                    color: "darkgrey", // Optionally change the text color on hover
                    textDecorationColor: "underline",
                    textDecorationColor: "red",
                  },
                }}
              >

				<Link
				  href={{ 
					   pathname: '/subscription', 
			           query: { plan: "basic"}
				  }}
				  passHref
				>
					Choose Basic
				</Link>

              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                my: 6,
                p: 15,
                border: "1px solid",
                borderColor: "black",
                borderRadius: 2,
                color: "darkred",
              }}
            >
              <Typography variant="h4" className="title" paddingBottom={3}>
                Pro
              </Typography>
              <Typography variant="h5" paddingBottom={3}>
                $10 / Month
              </Typography>
              <Typography paddingBottom={3} variant="h6">
                Unlimited flashcards and storage with priority
              </Typography>
 			  <Button
                sx={{
                  mt: 2,
                  color: "black",
                  border: "1px solid",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "grey", // Change the hover background color
                    color: "darkgrey", // Optionally change the text color on hover
                    textDecorationColor: "underline",
                    textDecorationColor: "red",
                  },
                }}
              >
				<Link
				  href={{ 
					   pathname: '/subscription', 
			           query: { plan: "premium"}
				  }}
				  passHref
				>
					Choose Premium 
				</Link>

              </Button>

	  		</Box>
          </Grid> 
		</Grid>
	</Box>
	  </Container>
);
}
