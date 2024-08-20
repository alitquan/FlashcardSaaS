import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Card, CardActionArea, CardContent, Grid, Box, Button, TextField, Typography, Paper, Container } from "@mui/material";
import React from 'react';
import { useState } from "react";

const Flipcard = ( {front, back} ) =>{

	const [flipped, setFlipped] = useState(false);


	const handleCardClick = () => {
		setFlipped(!flipped);
	};


	return( 
		<Card sx={{
			width: '50%',
			minHeight: '20vh',
			perspective: '1000px', 
		}}

		>
			<CardContent> 

			<CardActionArea
				onClick={() => setFlipped(true)}
				sx = {{
				  position: 'relative',
				  width: '100%',
				  height: '100%',
				}} 
			>
			
			<Box
				sx={{ 
					display: 'flex', 
					justifyContent: 'center',
					alignItems: 'center',
					transition: 'transform 0.6s',
					transformStyle: 'preserve-3d',
					transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
				}} 
			> 
				<Box
					sx={{
						position: 'absolute',
						width: '50%',
						height: '100%',
						backfaceVisibility: 'hidden', // Hide backface when flipped
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 2,
						boxSizing: 'border-box',
						backgroundColor: 'white',
						boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional: for better visual
					}}
					>
						<Typography variant="h5"
							sx={{
								minHeight: '30vh',
							}}
						>{front} </Typography>
				</Box>

				<Box
					sx={{
						position: 'absolute',
						width: '50%',
						height: '100%',
						backfaceVisibility: 'hidden', // Hide backface when flipped
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 2,
						boxSizing: 'border-box',
						backgroundColor: 'lightblue',
						// transform: 'rotateY(180deg)',
					}}
				>

					<Typography variant="h5"
						sx={{
							minHeight: '30vh',
						}}
					>{back} </Typography>

				</Box>


			</Box> 


			</CardActionArea>



			</CardContent>
		</Card> 
	)	
}

export default Flipcard;
