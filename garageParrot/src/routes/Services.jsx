import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';


export default function Services () {

    const [services, setServices] = useState('');
    const apiUrl = 'https://127.0.0.1:8000/api/servicess';

    useEffect(() => {
        const fetchData = () => {
            axios.get(apiUrl)
                .then((response) => setServices(response.data.services))
                .catch((error) => console.log(error));
        };
        fetchData();
    } , []);

    return (
        <Box>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Services
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Voici les services que nous proposons:
            </Typography>
            <ul>
                {services && services.map((service) => (
                    <li key={service.id}>
                        {service.description}
                    </li>
                ))}
            </ul>
        </Box>
    );
}
