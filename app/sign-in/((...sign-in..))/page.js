'use client'
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Container, AppBar, Toolbar, Typography, Button, Link, Box } from "@mui/material";

export default function SignupPage() {


  return (
    <Container maxWidth="100vw">
      <AppBar sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: 25 }}>
            Smart Flashcard
          </Typography>
          <Button color="inherit" sx={{ fontSize: 20 }}>
            <Link
              href="/sign-up"
              passHref
              sx={{ textDecoration: "none", color: "black" }}
            >
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        marginTop={20}
        sx={{ height: '100vh' }} // Ensure full viewport height for centering
      >
        <Typography variant="h4">Sign In</Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
