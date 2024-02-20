import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';



export default function Temoignages () {

    const [temoignage, setTemoignage] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/temoignages';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
                .then((response) => setTemoignage(response.data.Temoignage))
                .catch((error) => console.log(error));
        };
        fetchData();
    } , []);

    return (
        <Box>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Temoignages
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Voici les temoignages de nos clients:
            </Typography>
            <ul>
                {temoignage && temoignage.map((temoignage) => (
                    <li key={temoignage.id}>
                        {temoignage.nom}
                        {temoignage.prenom}
                        {temoignage.commentaires}
                        {temoignage.notes}
                    </li>
                ))}
            </ul>
        </Box>
    );
}
