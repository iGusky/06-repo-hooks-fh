import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    //* Se extrajo la función dispatch del useContext
    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        //* Se ejecuta el dispatch (reducer).
        dispatch({
            type: types.login,
            payload: { name: 'Gustavo' } 
        });
        
        history.replace( lastPath );
    }

    const lastPath = localStorage.getItem('lastPath') || '/';

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
                className = "btn btn-primary"
                onClick = { handleLogin }
            >
                Ingresar
            </button>
        </div>
    )
}
