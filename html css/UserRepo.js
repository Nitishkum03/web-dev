
export function UserRepo(){
    const Repo_Data = document.getElementById('repolist');
    const UserName  = document.getElementById('UserName').value;
    const Name = UserName;

    fetch(`https://api.github.com/users/${Name}/repos`).then(response=>{
        return response.json()
    }).then((repo)=>{
        Repo_Data.innerHTML=`
        <div class="Repomain">
        <h1>User Repos</h1>
        <div class="repocards">
        </div>
        </div>
        `
        console.log(repo)
    })

}