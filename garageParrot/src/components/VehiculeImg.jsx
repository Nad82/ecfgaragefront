import React from 'react'

const VehiculeImg= () => {
    return (
        <div>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <img
                    src='/vehiculeImg.png'
                    alt='vehicule Accueil'
                    max-width='100%'
                    height= 'auto'
                />
            </div>
        </div>
    )
}

export default VehiculeImg