import base64 from "react-native-base64";

const apiPrefix = 'https://accounts.spotify.com/api';
const client_id = 'd8dc1b9bba5546ddad5d2a89d5efe292';
const client_secret = 'cdd990764b0c40e996e388953b871274';

const base64Credentials = base64.encode(client_id + ':' + client_secret);

export default async () => {
    console.log('token begin');
    const res = await fetch(`${apiPrefix}/token`, {
         method: 'POST',
         headers: {
             Authorization: `Basic ${base64Credentials}`,
             'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: 'grant_type=client_credentials,'
    });
    const json = await res.json();
    const newToken = json.access.token;
    console.log('token is', newToken);
    return newToken;
}