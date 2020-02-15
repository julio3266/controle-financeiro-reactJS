import React from 'react';
import {AppBar, Toolbar, Button, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function NavBar(){
    return(
        <div>
            <AppBar  position="state">
                <Toolbar >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ flexGrow:1 }} >Finance</Typography>
                    <Button color="inherit">Admin</Button>
                    <Button color="inherit">Financeiro</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}