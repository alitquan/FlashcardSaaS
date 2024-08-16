import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Card, CardActionArea, CardContent, Grid, Box, Button, TextField, Typography, Paper, Container } from "@mui/material";
import React from 'react';

const Flipcard = ( {front, back} ) =>{

	return( 
		<Card sx={{
			width: '50%',
			minHeight: '20vh'
		}}

		>
			<CardContent> 

			<CardActionArea
				onClick={() => handleCardClick(index)}
			>
			
			<Box
				sx={{ 
					display: 'flex', 
					justifyContent: 'center',
					alignItems: 'center',
				}} 
			> 
				<Box
					sx={{
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
					<Typography variant="h5">{front} {back} </Typography>
				</Box>
				{/* 

					Back face 

				<Box
					sx={{
						position: 'absolute',
							width: '100%',
							height: '100%',
							backfaceVisibility: 'hidden', // Hide backface when flipped
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 2,
							boxSizing: 'border-box',
							backgroundColor: 'lightblue',
							transform: 'rotateY(180deg)',
					}}
				>
					<Typography variant="h5">{flashcard.back}</Typography>
				</Box>

					*/}

			</Box> 


			</CardActionArea>



			</CardContent>
		</Card> 
	)	
}

export default Flipcard;
