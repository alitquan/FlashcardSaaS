'use client' 

import {useUser} from '@clerk/nextjs'
import {use, useEffect, useState} from 'react' 

import {CollectionReference, doc, collection, option, getDoc, setDoc} from 'firebase/firestore' 
import {db} from '@/firebase' 
import {useRouter} from 'next/navigation' 
import {Card, CardActionArea, CardContent, Container, Box, Typography, Grid} from '@mui/material' 
import Flashcardbar from '../components/flashCardBar' 

export default function Flashcards() {


	const {isLoaded, isSignedIn, user} = useUser();
	const [flashcards, setFlashcards] = useState([]);
	const [collectionList, setCollections] = useState([]);
  	const [flipped, setFlipped] = useState({});


	const handleCardClick = (id) => {
		setFlipped((prev) => ({
		  ...prev,
		  [id]: !prev[id], // Toggle flip state
		}));
	};

	useEffect( () => {

		async function getFlashCards() {
			if (!user) {
				console.log("no user");
			}
			else {
				console.log("User: ", user);
			} 
			const docRef = doc(collection(db,'users'),user.id)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				const collections = docSnap.data()
				// const collections = docSnap.data().flashcards || []
				console.log("initial retrieval - collections: ", collections) 
				console.log(typeof collections);
				console.log(collections.flashcards);
				console.log("Breaking it up")
				let list = [];
				for (const collection of collections.flashcards) {
					list.push(collection);
				}
				setCollections(list)
				console.log("Printing collection list: ");
				console.log({collectionList});
			}
			else {
				console.log("doc snap does not exist");
				await setDoc( docRef, {flashcards: []});
			}
		}
			console.log("Ran");
			getFlashCards(); 
		}, [user, isSignedIn])



	return(
		<Container maxWidth="100vw"
			sx={{ 
				display: "flex", 
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "2vw", 
			}}>
			<Flashcardbar/> 
			<Typography
				variant="h1">
				Select a collection: 	
			</Typography>

			<>
				{collectionList.length > 0 ? (
					<>
						{collectionList.map((collection, index) => (
					<Box
						key={index}
						sx={{
							width: '40%',
							'&:hover': {
								backgroundColor: 'lightblue', // Change this to your desired hover color
							},
							padding: 2,
							display: 'flex',
							justifyContent: 'center',
							cursor: 'pointer'
						}}
					>
						<Typography variant="h2">
								{collection.name} 
						</Typography>
					</Box>
						))}
					</>
				) : (
					<Typography variant="h6">
						No collections available
					</Typography>
				)}
			</>
		
		</Container> 
	);

} 
