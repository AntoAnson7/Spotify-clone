import { useEffect, useState } from 'react'
import logo from './images/spoti.png'
import './Login.css'
import {loginUrl} from './spotify'

export const Login=()=>{
    
    return (
        <div className='login-screen'>
            Login
            {/* Spoti Logo */}
            {/* Login */}
            <img src={logo} alt="" />
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}