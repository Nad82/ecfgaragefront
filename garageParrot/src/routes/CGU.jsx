import React from "react";
import { Typography, Box } from "@mui/material";
import Footer from "../components/Footer"
import BoutonRetourAccueil from '../components/BoutonRetourAccueil'
import Header from "../components/Header";

export default function CGU () {
    return (
        <Box>
            <Header/>
            <Typography variant="h4" style={{ marginTop: "2rem" }}> 
                Conditions générales d'utilisation
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                bienvenue sur le site web du Garage V.Parrot. Veuillez lire attentivement les présentes conditions 
                générales d'utilisation qui régissent votre utilisation du site web du Garage V.Parrot:    
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                1. Acceptation des conditions générales d'utilisation
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                En utilisant le site web du Garage V.Parrot, vous acceptez d'être lié par les présentes conditions 
                générales d'utilisation. 
                Si vous n'acceptez pas ces conditions générales d'utilisation, vous ne devez pas utiliser le site 
                web du Garage V.Parrot.
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                2. Propriété intellectuelle
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Le contenu du site web du Garage V.Parrot, y compris, sans limitation, les textes, graphiques, 
                images, vidéos, logiciels, marques, logos et tout autre matériel, est protégé par 
                les droits d'auteur, marques de commerce et autres droits de propriété intellectuelle ou droits 
                de propriété.
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                3. Utilisation du site web du Garage V.Parrot
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Vous pouvez afficher, télécharger pour la mise en cache uniquement et imprimer des pages, des 
                fichiers ou d'autres contenus du site web du Garage V.Parrot pour votre usage personnel, sous 
                réserve des restrictions énoncées ci-dessous et ailleurs dans les présentes conditions générales 
                d'utilisation.
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Vous ne devez pas:
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                republier, vendre, louer ou sous-licencier du matériel du site web du Garage V.Parrot;
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                afficher tout matériel du site web du Garage V.Parrot en public;
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                reproduire, dupliquer, copier ou exploiter de toute autre manière le matériel de notre site web 
                à des fins commerciales;
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                éditer ou modifier tout matériel du site web du Garage V.Parrot;
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                redistribuer le matériel du site web du Garage V.Parrot - sauf pour le contenu spécifiquement et 
                expressément mis à disposition pour la redistribution; ou
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                republier ou reproduire toute partie de ce site web via un lien de référence.
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                4. Politique de confidentialité
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Le site web du Garage V.Parrot traite les informations vous concernant conformément à sa politique 
                de confidentialité.
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                5. politique de cookies
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Le site web du Garage V.Parrot traite les informations vous concernant conformément à sa politique 
                de cookies.
            </Typography>
            <Typography variant="h5" style={{ marginTop: "1rem" }}>
                6. Limitations de responsabilité
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Le site web du Garage V.Parrot ne sera pas responsable envers vous (que ce soit en vertu de la 
                loi des contrats, de la loi des délits ou autrement) en relation avec le contenu du site web du 
                Garage V.Parrot:
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                dans la mesure où le site web du Garage V.Parrot est fourni gratuitement, pour toute perte directe;
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                pour toute perte indirecte, spéciale ou consécutive; ou
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                pour toute entreprise, perte de revenus, revenus, bénéfices ou économies prévues, perte de 
                contrats ou relations d'affaires, perte de réputation ou de réputation, ou perte ou corruption 
                de données ou d'informations.
            </Typography>
            <Typography variant="body1" style={{ marginTop: "1rem" }} paragraph>
                Ces limitations de responsabilité s'appliquent même si le site web du Garage V.Parrot a été 
                expressément informé de la perte potentielle.
            </Typography>
            <BoutonRetourAccueil/>
            <Footer/>
        </Box>
    );
}
