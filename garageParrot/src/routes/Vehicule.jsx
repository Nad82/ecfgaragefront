import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoutonRetourAccueil from '../components/BoutonRetourAccueil';


export default function Vehicule () {

    const [vehicule, setVehicule] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/vehicules';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
                .then((response) => setVehicule(response.data.vehicule))
                .catch((error) => console.log(error));
        };
        fetchData();
    } , []);

    return (
        <Box>
            <Header/>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Vehicules
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Voici les vehicule que nous proposons:
            </Typography>
            <ul>
                {vehicule && vehicule.map((vehicule) => (
                    <li key={vehicule.id}>
                        {vehicule.prix}
                        {vehicule.annee}
                        {vehicule.kilometrage}
                        {vehicule.equipements}
                    </li>
                ))}
            </ul>
            <BoutonRetourAccueil/>
            <Footer/>
        </Box>
    );
}
