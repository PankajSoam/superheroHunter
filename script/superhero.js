//get value of 'id' of the superhero from query parameters
const params = new URLSearchParams(window.location.search);
var id = params.get('id');



var favList = JSON.parse(localStorage.getItem("favList"));
console.log(favList);
if(favList==null)
    favList = [];


const title = document.getElementById('superhero-title');
const image = document.getElementById('superhero-image');
const fav = document.getElementById('favourite');



fetch('https://superheroapi.com/api.php/1893804484082909/'+id)
    .then(response => response.json())
    .then(data => renderInfo(data))
    .catch(err => console.log(err));


//render all detailed on=btained in json 
function renderInfo(data){

    console.log(data);

    //display title
    title.innerHTML = data.name;

    //display image
    image.src = data.image.url;
    image.alt="Image not found";
    
    
    //display powerstats details
    for(var i in data.powerstats){
        document.getElementById(i).innerHTML = data.powerstats[i];
    }

    //display biography details
    for(var i in data.biography){
        document.getElementById(i).innerHTML = data.biography[i];
    }

    //display appearance details
    for(var i in data.appearance){
        document.getElementById(i).innerHTML = data.appearance[i];
    }

    //display work details
    for(var i in data.work){
        document.getElementById(i).innerHTML = data.work[i];
    }

    //display connections details
    for(var i in data.connections){
        document.getElementById(i).innerHTML = data.connections[i];
    }
}

