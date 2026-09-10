require('dotenv').config();
const express = require('express');

const app = express();
const port = 3000;

const githubData = {
  "login": "chinmay1225",
  "id": 221876227,
  "node_id": "U_kgDODTmQAw",
  "avatar_url": "https://avatars.githubusercontent.com/u/221876227?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chinmay1225",
  "html_url": "https://github.com/chinmay1225",
  "followers_url": "https://api.github.com/users/chinmay1225/followers",
  "following_url": "https://api.github.com/users/chinmay1225/following{/other_user}",
  "gists_url": "https://api.github.com/users/chinmay1225/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chinmay1225/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chinmay1225/subscriptions",
  "organizations_url": "https://api.github.com/users/chinmay1225/orgs",
  "repos_url": "https://api.github.com/users/chinmay1225/repos",
  "events_url": "https://api.github.com/users/chinmay1225/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chinmay1225/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chinmay Patil",
  "company": "None",
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Computer Engineering student skilled in C++, JavaScript, React, and frontend development. Passionate about building responsive web apps and solving problems.",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2025-07-20T17:18:12Z",
  "updated_at": "2026-08-12T18:32:21Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req ,res) => {
    res.send('chinmaydotcom')
});

app.get('/login', (req , res) => {
    res.send('<h1>Please login at portal</h1>');
})

app.get('/youtube', (req,res)=> {
  res.send('<h2>Chai aur code</h2>');
});

app.get('/github' , (req , res)=>{
  res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});