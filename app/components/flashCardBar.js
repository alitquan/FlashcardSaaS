import React from 'react';
import { IconButton, AppBar, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Flashcardbar() {
    // const { toggleLayout } = useLayout();

    return (
        <AppBar position="static" color="primary" 
			sx={{ boxShadow: 'none', 
				  height: 50, 
				  width: '50%',
				  marginBottom: '2vw'}}>
            <Toolbar>
		{/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleLayout}>
*/}
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
