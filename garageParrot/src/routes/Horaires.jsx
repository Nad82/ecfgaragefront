import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Horaires () {

    const [horaires, setHoraires] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchHoraires = async () => {
            try {
                const response = await axios.get('https://127.0.0.1:8000/api/horairess')
                setHoraires(response.data)
                setLoading(false)
            } catch (error) {
                console.error('fetchHoraires -> error', error)
            }
        }
        fetchHoraires()

        return () => {
            console.log('cleanup')
        }
    }, [])

    return (
        <div>
            {loading ? (
                <p>Chargement...</p>
            ) : (
                <ul>
                {horaires && horaires.map((horaires) => (
                    <li key={horaires.id}>
                        {horaires.lundi}
                        {horaires.mardi}
                        {horaires.mercredi}
                        {horaires.jeudi}
                        {horaires.vendredi}
                        {horaires.samedi}
                        {horaires.dimanche}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

