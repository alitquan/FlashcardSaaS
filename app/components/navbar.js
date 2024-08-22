import Image from "next/image";
import Link from 'next/link';
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

export default function Navbar() {
	return( 
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
                  mt: 2,or: "black",
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
	);

}
