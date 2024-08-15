import Image from "next/image";
import getStripe from "./utils/get-stripe";
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

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="sign-in">
              Login
            </Button>
            <Button color="inherit" href="sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

	

 	{/* Signed-Out Components */}
		  <SignedOut> 
		  <Box textAlign="center" my={4}>
			<Typography variant="h2" gutterBottom>
			  Welcome To Flashcard SaaS
			</Typography>
			<Typography variant="h5" gutterBottom>
			  The easiest way to make flashcards from your text
			</Typography>
			<Button variant="contained" color="primary" sx={{ mt: 2 }} gutterBottom>
			  Get Started
			</Button>
		  </Box>

		  <Box sx={{ my: 6 }}>
			<Typography variant="h4" textAlign="center" sx={{ mb: 5 }}>
			  Features
			</Typography>
			<Grid container spacing={4}>
			  <Grid item xs={12} md={4}>
				<Typography variant="h6">Easy Text Input</Typography>
				<Typography>
				  Simply Input your text and let our software do the rest
				</Typography>
			  </Grid>
			  <Grid item xs={12} md={4}>
				<Typography variant="h6">Accessible Anywhere</Typography>
				<Typography>
				  Access your flashcards from any device. Study on the go with ease.
				</Typography>
			  </Grid>
			  <Grid item xs={12} md={4}>
				<Typography variant="h6">Smart Flashcards</Typography>
				<Typography>
				  Our AI intelligently breaks down your text into concise
				  flashcards, perfect for studying
				</Typography>
			  </Grid>
			</Grid>
		  </Box>

		  <Box sx={{ my: 6, textAlign: "center" }}>
			<Typography variant="h4" sx={{ mb: 5 }}>
			  Pricing
			</Typography>
			<Grid container spacing={4}>
			  <Grid item xs={12} md={6}>
				<Box
				  sx={{
					my: 6,
					p: 3,
					border: "1px solid",
					borderColor: "grey",
					borderRadius: 2,
				  }}
				>
				  <Typography variant="h5" gutterBottom>
					Basic
				  </Typography>
				  <Typography variant="h6" gutterBottom>
					$5 / Month
				  </Typography>
				  <Typography gutterBottom>
					Access to basic flashcard features and limited storage
				  </Typography>
				  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
					borderColor: "grey",
					borderRadius: 2,
				  }}
				>
				  <Typography variant="h5" gutterBottom>
					Pro
				  </Typography>
				  <Typography variant="h6" gutterBottom>
					$10 / Month
				  </Typography>
				  <Typography gutterBottom>
					Unlimited flashcards and storage with priority
				  </Typography>
				  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
					Choose Pro
				  </Button>
				</Box>
			  </Grid>
			</Grid>
		  </Box>
		</SignedOut> 
	

 	{/* Signed-In Components */}
	<SignedIn>
	  	<Selection/> 
		<Dashboard/>
	</SignedIn> 


    </Container>
  );
}
