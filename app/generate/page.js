"use client";

import { db } from "@/firebase";
import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Card, CardActionArea, CardContent, Grid, Box, Button, TextField, Typography, Paper, Container } from "@mui/material";
import {useUser} from '@clerk/nextjs'

export default function Generate() {
  const [isLoaded, setLoaded] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const [flipped, setFlipped] = useState({});
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {isSignedIn, user} = useUser();


const handleSubmit = async () => {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
	console.log("Data: ",data);
	// console.log(data.flashcards);
    setFlashcards(data);
	console.log("length: ", flashcards.length);
  } catch (error) {
    console.error("Error fetching flashcards:", error);
  }
};



  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle flip state
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFlashcards = async () => {
    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    try {
      const batch = writeBatch(db);
	  var userDocRef; 
	  
	  if (! user) { 
      	userDocRef = doc(collection(db, "users"), "userId"); // Replace "userId" with actual user ID
	  }
	  else { 
		userDocRef = doc(collection(db,"users"), user.id);
	  }

      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        if (collections.find((f) => f.name === name)) {
          alert("Flashcard collection with the same name already exists");
          return;
        } else {
          collections.push({ name });
          batch.set(userDocRef, { flashcards: collections }, { merge: true });
        }
      } else {
        batch.set(userDocRef, { flashcards: [{ name }] });
      }

      const colRef = collection(userDocRef, name);
      flashcards.forEach((flashcard) => {
        const cardDocRef = doc(colRef);
        batch.set(cardDocRef, flashcard);
      });

      await batch.commit();
      handleClose();
      router.push("/flashcards");
    } catch (error) {
      console.error("Error saving flashcards:", error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 4,
          mb: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Generate Flashcards</Typography>
        <Paper sx={{ p: 4, width: '100%' }}>
          <TextField 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            label="Enter text"
            fullWidth
            multiline
            rows={4} 
            variant="outlined" 
            sx={{ mb: 2 }}
          /> 
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Submit
          </Button>
        </Paper>
      </Box>

      {flashcards.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Flashcards Preview</Typography> 
          <Grid container spacing={3}>
            {flashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardActionArea
                    onClick={() => handleCardClick(index)}
                  >
                    <CardContent>
				<Box
				sx={{
					perspective: '1000px', // Provide depth for 3D effect
					width: '100%',
					height: '200px',
				}}
				>
				<Box
				sx={{
					position: 'relative',
					width: '100%',
					height: '100%',
					transformStyle: 'preserve-3d',
					transition: 'transform 0.5s',
					transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
				}}
				>
				{/* Front face */}
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
					backgroundColor: 'white',
					boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Optional: for better visual
				}}
				>
				<Typography variant="h5">{flashcard.front}</Typography>
				</Box>
				{/* Back face */}
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
				</Box>
				</Box>


                    </CardContent>
                  </CardActionArea> 
                </Card> 
              </Grid> 
            ))}
          </Grid>
		  <Box sx={{
			mt:4, 
			display: 'flex',
			justifyContent: 'center' 
		  }}> 
		  	<Button variant='contained' color='secondary' onClick={handleOpen}>
		  		Save
		  	</Button>
		  </Box> 
        </Box>
      )}

	<Dialog open={open} onClose={handleClose}>
		<DialogTitle> Save Flashcards </DialogTitle>


		<DialogContent> 

			<DialogContentText> 
				Please enter a name for your flashcards collection
			</DialogContentText> 

			<TextField 
			  autoFocus 
			  margin="dense"
			  label="Collection name" 
			  type="text"
			  fullWidth 
			  value={name}
			  onChange= { (e) =>
				setName(e.target.value)
			  }
			  variant="outlined"
			  />
		</DialogContent>
		<DialogActions> 
			<Button onClick={handleClose}> Cancel </Button>
			<Button onClick={saveFlashcards}> Save </Button>
		</DialogActions>
		</Dialog>

    </Container>
  );
}

