const linksSocialMidia = {
    github: "Cesar150",
    linkedin: "in/César-felipe-gomes-da-silva-6328911b7/",
    youtube: "channel/UCG46_A-CLgsusvX5FMwDbmQ"

}

function changeSocialMidiaLinks() {
    // for para manipular o DOM, criei uma let li e para cada li eu quero acessar o id socoalList filhos e fazar algo.
    for (let li of socialList.children) {
        let social = li.getAttribute('class')

        // quando temos varios elementos irmãos e queremos pegar o primeiro filho,
        //usamos children[0] passando a posição de qual filho queremos lembrando que o primeiro filho 
        //inicia do index zero 0.

        li.children[0].href = `https://${social}.com/${linksSocialMidia[social]}`;
    }
}
changeSocialMidiaLinks();

// como utilizar uma API, no caso a api do github. 1-) criar uma função 2-) criar um variável e passar a url da api
// 3-) utilizar o fetch() para passar a url, o fetch() é utilizado para "bater na porta da api e receber uma informação dela"
function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMidia.github}`;

    // proximo passo é criar uma promise, que vai fazer algo com os dados que o fetch() recebeu.
    // dentro da promise criamos uma arrow function que irá transformar o que o fetch() está passando para um json(),
    // depois criamos outra promise que irá ter uma arrow function que terá os dados em json, dai basta eu acessar esses dados igual um objeto.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name;
            userBio.textContent = data.bio;
            userGithubLink.href = data.html_url;
            userImg.src = data.avatar_url;
            userLogin.textContent = data.login;
        })
}

getGithubProfileInfos();

let count = 1;

function darkMode() {

    if (count === 0) {
        document.querySelector("main").style.backgroundImage = "url(image/background.svg)";
        document.querySelector(".cord").src = "image/faixa.svg";
        document.querySelector(".hole").style.marginTop = "7.5px";
        document.querySelector(".avatar").style.marginTop = "11.5rem";
        document.querySelector(".page-landing").style.backgroundImage = "linear-gradient(rgb(228, 191, 60),rgb(233, 77, 163))";
        count = 1;
    } else {
        document.querySelector("main").style.backgroundImage = "url(image/mainDark.svg)";
        document.querySelector(".cord").src = "image/darkCord.svg";
        document.querySelector(".avatar").style.marginTop = "11rem";
        document.querySelector(".hole").style.marginTop = "3px";
        document.querySelector(".page-landing").style.backgroundImage = "linear-gradient(rgb(184, 145, 6),rgb(83, 58, 139))";
        count = 0;
    }
}
