import React from "react";
import { Box, Typography } from "@mui/material";

const Adresse = () => {
    return (
        <Box sx={{ width: 500, flexGrow: 1}}>
            <Typography variant="h6" align="left" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
                Adresse:
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
                1 rue du garage,
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
                31000 Toulouse
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
                Telephone: 
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
            05 61 00 00 00
            </Typography>
            <Typography variant="body1" align="left" color= "textSecondary">
            Email:
            </Typography>
            <Typography variant="body2" align="left" color= "textSecondary">
            contact@garageparrot.fr
            </Typography>
        </Box>
    );
};

export default Adresse;
