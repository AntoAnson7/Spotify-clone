import './App.css'
import {Login} from './Login'
import {loginUrl,getToken} from './spotify'
import { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'
import {Player} from './Player/Player'
import { useDataValues } from './DataLayer'

const spotify=new SpotifyWebApi()

function App() {

  const [{user,token},dispatch]=useDataValues()

  useEffect(()=>{
      const hash =getToken()
      window.location.hash=""
      const temp_token=hash.access_token

      if(temp_token){
        dispatch({
          type:'SET_TOKEN',
          token:temp_token
        })

        spotify.setAccessToken(temp_token)
        spotify.getMe().then(user=>{
          dispatch({
            type:'SET_USER',
            user:user
          })
        })
      }
  },[])

  return (
    <div className="App">
      {token?<Player spotify={spotify}/>:<Login/>}
    </div>
  );
}

export default App;
