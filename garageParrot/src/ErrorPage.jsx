import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div 
        style={{marginTop:'20px', 
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%'}}
        >
        <h1>Oops!</h1>
        <p>Désolé, une erreur innattendue s'est produite.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        </div>
    );
}