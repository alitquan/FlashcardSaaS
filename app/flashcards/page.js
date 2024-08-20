'use client' 

import {useUser} from '@clerk/nextjs'
import {use, useEffect, useState} from 'react' 

import {CollectionReference, doc, collection, option, getDoc, setDoc} from 'firebase/firestore' 
import {db} from '@/firebase' 
import {useRouter} from 'next/navigation' 
import {Container, Typography} from '@mui/material' 




export default function Flashcards() {

	const {isLoaded, isSignedIn, user} = useUser();
	const {flashcards, setFlashcards} = useState([]);

	useEffect( () => {

		async function getFlashCards() {
			if (!user) {
				console.log("no user");
			}
			const docRef = doc(collection(db,'users'),user.id)
			const docSnap = await getDoc(docRef)

			if (docSnap.exists()) {
				const collections = docSnap.data().flashcards || []
				console.log("initial retrieval - collections: ", collections) 
				setFlashcards(collections)
			}
			else {
				console.log("doc snap does not exist");
				await setDoc( docRef, {flashcards: []});
			}
		}
			getFlashCards(); 
		}, [user])



	return(
		<Container maxWidth="100vw"
			sx={{ 
				display: "flex", 
				justifyContent: "center",
				alignItems: "center",
				marginTop: "1vw", 
			}}>
			<Typography
				variant="h1">
				Hello
			</Typography>
		</Container> 
	);

} 
