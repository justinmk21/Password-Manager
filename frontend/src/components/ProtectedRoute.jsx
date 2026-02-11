import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { REFRESH_TOKEN, ACCESS_TOKEN } from '../constants';
import { useState, useEffect } from 'react';

function ProtectedRoute({children}) {
    const [IsAuthourized, setIsAuthourized] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthourized(false));
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthourized(true)
            } else {
                setIsAuthourized(false)
            }
        }
        catch (error) {
            console.log(error)
            setIsAuthourized(false)
        }
    }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthourized(false)
            return;
        }
        const decode = jwtDecode(token)
        const tokenExpiration = decode.exp
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthourized(true)
        }
    }
    if (IsAuthourized === null) {
        return <div>Loading...</div>
    }
    return IsAuthourized ? children : <Navigate to={"/login"}/>
}

export default ProtectedRoute;