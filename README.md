Create an account at https://www.petfinder.com/user/register/

Get your API-KEY and SECRET at https://www.petfinder.com/developers/

Use either curl -d "grant_type=client_credentials&client_id={API-KEY}&client_secret={SECRET}" https://api.petfinder.com/v2/oauth2/token
OR
Postman POST request https://api.petfinder.com/v2/oauth2/token with body x-www-form-urlencoded and the above params as key:value pairs
and replace {API-KEY} and {SECRET} to get your API_TOKEN

npm i (to install node packages)

create config.js in root folder and add "export const API_TOKEN = "yourSecret""

nodemon index.js
