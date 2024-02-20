import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from "../components/Footer"
import BoutonRetourAccueil from '../components/BoutonRetourAccueil'
import Header from '../components/Header';

export default function MentionsLegales () {
    return (
        <Box>
            <Header/>
            <Typography variant="h4" style={{marginTop: '2rem'}}>
                Mentions légales
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Raison Sociale : Garage V.Parrot
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Forme juridique : SAS
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Siège social : 1 rue du garage, 31000 Toulouse
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Capital social : 10 000€
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Numéro de téléphone : 05 61 00 00 00
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Adresse e-mail :   contact@garageparrot.fr 
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Numéro d'inscription au registre du commerce et des sociétés (RCS) : 123456789
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Numéro individuel d'identification fiscale (TVA) : 123456789
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Nom du responsable de la publication : Vincent Parrot
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Nom du responsable de la rédaction : Vincent Parrot
            </Typography>
            <Typography variant="body1" style={{marginTop: '1rem'}}>
                Hébergeur du site : OVH
            </Typography>
            <BoutonRetourAccueil/>
            <Footer/>    
        </Box>
    );
};
