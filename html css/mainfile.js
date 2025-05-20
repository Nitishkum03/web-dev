import { getGitHubUser } from "./apicalling.js";
import { UserRepo } from "./UserRepo.js";
const button = document.getElementById("submitButton");
button.addEventListener("click",getGitHubUser)

const repobtn = document.getElementById("submitButton");
repobtn.addEventListener("click",UserRepo)