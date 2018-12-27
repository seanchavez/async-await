const fetch = require('node-fetch');

// class GitHubApiClient {
//   async fetchUser(handle) {
//     const url = `https://api.github.com/users/${handle}`;
//     const response = await fetch(url);
//     return await response.json();
//   }
// }

// (async () => {
//   const client = new GitHubApiClient();
//   const user = await client.fetchUser('mariusschulz');
//   console.log(user.name);
//   console.log(user.location);
// })();

async function fetchGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

fetchGithubUser('frgnchmghf')
  .then(user => {
    console.log(user);
    //console.log(user.location);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });
