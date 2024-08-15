import Head from "next/head";
import Image from "next/image";
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
  Paper,
  Link,
} from "@mui/material";

export default function Selection() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        padding: 0,
        maxWidth: 'none',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          height: '80%',
          width: '100%',
          mt: 0, // Remove margin-top
        }}
      >
        <Grid
          item
          xs={12} sm={6} md={3}
          sx={{
            height: '100%', // Full height of the grid item
            width: '100%', // Full width of the grid item
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/flashcards" underline="none" color="inherit" sx={{ width: '100%', height: '100%' }}>
            <Paper
              sx={{
                height: '100%', // Full height of the grid item
                width: '100%', // Full width of the grid item
                backgroundColor: '#f5f5f5',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#b3e5fc',
                },
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Review
            </Paper>
          </Link>
        </Grid>

        <Grid
          item
          xs={12} sm={6} md={3}
          sx={{
            height: '100%', // Full height of the grid item
            width: '100%', // Full width of the grid item
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link href="/generate" underline="none" color="inherit" sx={{ width: '100%', height: '100%' }}>
            <Paper
              sx={{
                height: '100%', // Full height of the grid item
                width: '100%', // Full width of the grid item
                backgroundColor: '#f5f5f5',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#b3e5fc',
                },
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Generate
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

