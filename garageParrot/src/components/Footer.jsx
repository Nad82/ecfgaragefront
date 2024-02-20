import React from 'react'
import { Typography, Grid } from '@mui/material'
import {Link } from 'react-router-dom'
import Adresse from './Adresse'
import Horaires from '../routes/Horaires'



export default function Footer () {

    const Item = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
    }

    return (
        <footer xs={6} md={12} style={{backgroundColor: '#3f51b5', color: '#fff', padding: '2rem 0'}}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={4} style={{display: 'flex', flexDirection: 'column', alignItems: 'right', justifyContent: 'right', marginTop: '20px'}}>
                    <Adresse/>
                </Grid>
                <Grid item xs={6} md={4} style={Item}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Liens utiles
                        </Typography> 
                        <Link to={`APropos`} style={{textDecoration: 'none'}}>
                            <Typography variant="body1" align="center" color= "textSecondary">
                                A propos
                            </Typography>
                        </Link>
                        <Link to={`CGU`} style={{textDecoration: 'none'}}>
                            <Typography variant="body1" align="center" color= "textSecondary">
                                Conditions générales d'utilisation
                            </Typography>
                        </Link>
                        <Link to={`MentionsLegales`} style={{textDecoration: 'none'}}>
                            <Typography variant="body1" align="center" color= "textSecondary">
                                Mentions légales
                            </Typography>
                        </Link>
                        <Link to={`Contacter`} style={{textDecoration: 'none'}}>
                            <Typography variant="body1" align="center" color= "textSecondary">
                                Nous contacter
                            </Typography>
                        </Link>
                        <div>
                            <br/>
                            <br/>
                        </div>
                        <Typography variant="body2" align="center" color= "textSecondary">
                            copyrigth {new Date().getFullYear()} Garage V.Parrot. Tous droits réservés.
                        </Typography>
                </Grid>
                <Grid item xs={6} md={4} style={Item}>
                    <Horaires/>
                </Grid>
            </Grid>
        </footer>
    );
};
