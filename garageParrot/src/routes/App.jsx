import { Box} from "@mui/material"
import React from "react"
import Typography from '@mui/material/Typography'
import Header from "../components/Header"
import ImageAccueil from "../components/ImageAccueil"
import Footer from "../components/Footer"
import APropos from "./APropos"
import Services from "./Services"
import VehiculeAccueil from "./VehiculeAccueil"
import Temoignages from "./Temoignages"
import Contacter from "./Contacter"


export default function App() {

  const Div = {
    display:'flex', 
    flexDirection:'column', 
    alignItems:'right', 
    justifyContent:'right', 
    marginTop:'20px'
  }

  return (
    <Box>
      <Header/>
      <ImageAccueil/>
      <div style={{display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:'20px'}}>
        <Typography variant='h4' color='primary' style={{marginBottom:'20px'}}>Bienvenue sur le site du Garage V.Parrot</Typography>
      </div>
      <div style={Div} >
        <APropos/>
      </div>
      <div style={Div}>
        <Services/>
      </div>
      <div style={Div}>
        <VehiculeAccueil/>
      </div>
      <div style={Div}>
        <Temoignages/>
      </div>
      <div style={Div}>
        <Contacter/>
      </div>
      <Footer/>
    </Box>
  )
}


