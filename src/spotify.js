export const authEndPoint="https://accounts.spotify.com/authorize"

const redirectUrl="http://localhost:3000/"

const clientID=process.env.REACT_APP_SPOTIFY_CLIENT_ID

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const loginUrl=`${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const getToken=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts=item.split("=")
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial
    },{})
}
