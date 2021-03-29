import React, { useReducer, useEffect } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer'
import { AppRouter } from './router/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) ||{logged: false};
}
export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        if( !user.name ){
            localStorage.removeItem( 'user' );
        }
        localStorage.setItem( 'user', JSON.stringify( user ) );

    }, [user])

    return (
       <AuthContext.Provider value = {{ user, dispatch }}>
            <AppRouter />
       </AuthContext.Provider>
    )
}
