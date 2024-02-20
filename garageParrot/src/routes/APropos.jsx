import React from 'react'
import { Typography, Box } from '@mui/material'


export default function APropos () {
    return (
        <Box>
            <Typography variant ="h4" style={{marginTop: '2rem'}}>
                A propos
            </Typography>
            <Typography variant= "body1" style={{marginTop: '1rem'}}>
                Bienvenue sur le site du garage V.Parrot.
                Fort de ses 15 ans d'expérience, notre équipe de mécaniciens est à votre disposition 
                pour l'entretien et la réparation de votre véhicule.
            </Typography>
            <Typography variant= "body1" style={{marginTop: '1rem'}}>
                Vincent Parrot, le gérant du garage, a ouvert son garage à Toulouse en 2021.
                Depuis 2 ans, nous proposons une large gamme de services: réparation de carrosserie et de 
                mécanique des véhicules ainsi que leur entretien régulier pour garantir leur performance
                et leur sécurité.
            </Typography>
            <Typography variant= "body1" style={{marginTop: '1rem'}}>
                Nous vendons également des véhicules d'occasion.
            </Typography>
            <Typography variant= "body1" style={{marginTop: '1rem'}}>
                Nous considérons notre atelier comme un véritable lieu de confiance pour nos clients. 
                Vos véhicules seront à tout prix entre de bonnes mains. Nous vous fournirons un service
                de qualité et personnalisé pour chaque client.
            </Typography>
            <Typography variant= "body1" style={{marginTop: '1rem'}}>
                N'hésitez pas à nous contacter pour toute demande d'information.
                Merci de votre visite sur notre site.
            </Typography>
        </Box>
    )
}

