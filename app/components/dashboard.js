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
} from "@mui/material";


export default function Dashboard () {
	return ( 
		<Container 
			maxWidth="100vw"
			sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '20vh'
			}}
		>

			<Typography
				variant="h4"
				color="red"
			>
				defined in /components/dashboard.js	
			</Typography>

		</Container> 
	);
}


