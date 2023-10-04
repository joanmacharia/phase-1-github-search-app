const githubform = document.getElementById('githubform');

const search = document.getElementById('search');

const githubcontainer = document.getElementById('githubcontainer');

const userlist = document.getElementById('userlist');




//let username = typicode;

fetch (`https://api.github.com/search/users?q=${username}`)

Method : "POST"

Accept : application/vnd.github.v3+json

.then(res => res.json())

.then(data => {

    displaygithubcontainer(data.items);

})




function displaygithubcontainer(){

    displaygithubcontainer.innerText = ' ';

}




githubform.addEventListener('submit', function(e) {

    e.preventDefault();

    const username=search.value;

})




userDiv.addEventListener('click'), function() {

    fetch(`https://api.github.com/search/users?q=${username}`)

    .then(res => res.json())

    .then(data => {

        displayuserlist(data);

    })




}