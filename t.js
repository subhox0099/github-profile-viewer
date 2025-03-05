

const container = document.querySelector(".container")


const APIURL = "https://api.github.com/users/"
const getuser = async (username) =>{

    const response = await  fetch(APIURL+username) 
    const data = await response.json()
    console.log(data)
    const result = `
     <div class="result">
            <div id="maininfo">
                <div class="images"><img class="image" src="${data.avatar_url}" alt=""></div>
                <div class="username">  
                    <div id="name"><h1>${data.name}</h1><br><p>${data.bio}
                    </p></div>
                    

                    <ul id="info">
                        <li>followers - <strong>${data.followers}</strong></li>
                        <li>following - <strong>${data.following}</strong></li>
                        <li>public repositories - <strong>${data.public_repos}</strong></li>
                    </ul>
                </div>
            </div>
                    <div id="repo">
                       
                    </div>

            </div>`

            container.innerHTML = result
            repository(username)

}


const repository = async (username) =>{
    const repo = document.querySelector("#repo")
    const response = await fetch(APIURL+username + "/repos")
    const data = await response.json()
    data.forEach((item) => {
        console.log(item)
        const elem = document.createElement("a")
        elem.classList.add("repo")
        elem.href = item.html_url
        elem.target  = "_blank"
        elem.textContent = item.name
        repo.appendChild(elem)

    });

}

const formsubmit = ()=>{
    const input = document.querySelector("#username")
    if(input.value != ""){
        getuser(input.value)
    }
    return false;
}



 // <a href="#" class="repo">repo1</a>
                        // <a href="#" class="repo">repo2</a>
                        // <a href="#" class="repo">repo3</a>
                        // <a href="#" class="repo">repo4</a>