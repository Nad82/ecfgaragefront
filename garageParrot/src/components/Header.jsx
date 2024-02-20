import React from 'react'
import { AppBar, Toolbar, IconButton, Button, Breadcrumbs, Box } from '@mui/material'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{flexGrow: 1}} style={{display:'flex', justifyContent:'space-between' }}>
                <IconButton
                    aria-label="home"
                    href="/"
                    sx={{ mr: 2 }}
                >
                    <div>
                        <img 
                            src= {logo} 
                            alt='Logo garage V.Parrot' 
                            width={80}
                            />
                    </div>
                </IconButton>
                <div role="presentation" onClick={handleClick} style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to= {`APropos`}
                            aria-label='aPropos'
                            underline='hover'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                A propos
                            </Button>
                        </Link>
                        <Link
                            to={`services`}
                            aria-label='services'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Services
                            </Button>
                        </Link>
                        <Link
                            to={`vehicule`}
                            aria-label='vehicules'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Vehicules
                            </Button>
                        </Link>
                        <Link
                            to={`temoignages`}
                            aria-label='temoignages'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Temoignages
                            </Button>
                        </Link>
                        <Link
                            to={`Contacter`}
                            aria-label='contact'
                        >
                            <Button
                                xs={1}
                                color='inherit'
                            >
                                Contact
                            </Button>
                        </Link>
                    </Breadcrumbs>
                </div>
                <Button
                    xs={1}
                    color='inherit'
                    href="https://127.0.0.1:8000//login"
                >Connexion Employe</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}


export default Header