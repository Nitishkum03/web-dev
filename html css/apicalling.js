export function getGitHubUser() {
  const resultDiv = document.getElementById('result');
  const UserName  = document.getElementById('UserName').value;
  const name = UserName;
  fetch(`https://api.github.com/users/${name}`)
    .then(response => {
      return response.json(); 
    })
    .then((user) => {
      resultDiv.innerHTML = `
      <div class="heading">
      <h1>OverView of <span>${name}</span></h1>
      </div>
      <div class="maincontent">
      <img src="${user.avatar_url}" width="200" height="200"/>
      <div>
      <h2>UserName :  ${user.name}</h2>
      <p>User's Bio:  ${user.bio || 'No bio available.'}</p>
      <a href="${user.html_url}">View Profile</a> 
      </div>
      </div>
      <div class="details">
      <p><span>Followers:</span> ${user.followers}</p>
      <p><span>Followings:</span> ${user.following} </p>
      <p><span>Public Repos:</span> ${user.public_repos} </p>
      </div>`
      console.log(user) 
    })
}
