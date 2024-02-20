import React from "react"
import { Box, Typography } from "@mui/material"


export default function Contacter () {
    return (
        <Box>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Nous contacter
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Pour nous contacter, veuillez remplir le formulaire ci-dessous:
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Vous pouvez aussi nous contacter:
            </Typography>
        </Box>
    );
}
