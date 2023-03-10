export const authEndpoint="https://accounts.spotify.com/authorize?";
const redirectUri="http://localhost:3000/";
const clientId="4bb2ebdd2e1b403e8cebb455f1f8a256";
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        var parts=item.split('=');
        initial[parts[0]] =decodeURIComponent(parts[1]);
        return initial;
    },{}); 
}

export const loginUrl=`${authEndpoint}response_type=token&client_id=${clientId}&scope=${scopes.join("%20")}&redirect_uri=${redirectUri}&show_dialog=true`;
