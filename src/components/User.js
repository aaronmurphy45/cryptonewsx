import { use } from 'express/lib/router';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase-config';
export default function User() {

    const [user, loading] = useAuthState(auth);

    return (
        <div style = {{width: "100%", alignContent: "center", marginLeft: "30%"}}>
            <h1>{user.email}</h1>
        </div>
    )
}
