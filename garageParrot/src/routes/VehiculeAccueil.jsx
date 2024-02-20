import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import VehiculeImg from '../components/VehiculeImg'


export default function VehiculeAccueil () {

    const Typo = {
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center',
        marginTop:'20px'
    }

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                    <VehiculeImg/>
                </Grid>
                <Grid item xs={6} md={8} style={Typo}>
                    <Typography variant='h4' style={Typo}>
                        Véhicules
                    </Typography>
                    <Typography variant='body1' style={Typo}>
                        Vous cherchez un véhicule d'occasion?
                    </Typography>
                    <Typography variant='body1' style={Typo}>
                        Nous sommes là pour vous aider.
                    </Typography>
                    <Typography variant='body1' style={Typo}>
                        Nous proposons une large gamme de véhicules d'occasion.
                    </Typography>
                    <Link to={`Vehicule`} style={{textDecoration:'none', alignItems:'center', justifyContent:'center'}}>
                        <Button
                            variant='contained'
                            color='primary'
                            style={{marginTop:'20px'}}>
                            Voir nos véhicules
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
