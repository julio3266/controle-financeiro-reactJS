import React from 'react'
import NavBar from '../Components/NavBar'
import MeuCard from '../Components/MeuCard'
import {Grid} from '@material-ui/core'
export default function Principal(){
    return(
        <>
            <NavBar />    
            <Grid style={{marginTop:20}} container spacing={1}>
                <Grid item xs={4}>
                    <MeuCard valor="2500" />
                </Grid>
                <Grid item xs={4}>
                    <MeuCard valor="2500" />
                </Grid>
                
                <Grid item xs={4}>
                    <MeuCard valor="2500" />
                </Grid>
            </Grid>
        </>
    )
}