import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '@mui/material'

export default function BoutonRetourAccueil () {
    return (
        <Link to= "/" style={{textDecoration: 'none'}}>   
                <Button variant="contained" style={{marginTop: '1rem'}}>
                    Retour à l'accueil
                </Button>
        </Link>
    )
}
