//get array containing IDs of all superheroes which were addded to Favourites
var favList = JSON.parse(localStorage.getItem("favList"));
const favContainer = document.getElementById('fav-container');
const snackbar = document.getElementById('snackbar');

//Display message for empty fav list
if(favList==null)
    favList = [];
    if (favList.length===0)
    favContainer.innerHTML = '<div style="margin-top: 50px">no favourite hero added<div>'


//render all fav heros
for(let item of favList){

    fetch('https://superheroapi.com/api.php/1893804484082909/'+item+'/image')
    .then(response => response.json())
    .then(data => renderCard(data))
    .catch(err => console.log(err))

    function renderCard(data){
        
        var card = document.createElement('div');
        card.classList.add('card');
        var cardImage = document.createElement('img');
        cardImage.setAttribute('id','card-image');
        cardImage.classList.add('cardImage');
        var cardTitle = document.createElement('div');
        cardTitle.classList.add('cardTitle');
        var fav = document.createElement('div');
        fav.classList.add('fav');

        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(fav);

        cardImage.src = data.url;
        cardTitle.innerHTML = data.name;
        fav.innerHTML = '<div id="heart-icon" class="remove">remove</div>';

        favContainer.appendChild(card);
        
        card.setAttribute('id',item);
    }

}

// removing card from favourites

favContainer.onclick = function(event){

    //If image is clicked, redirect to particular superhero page
    if(event.target.id==='card-image'){
        var id = event.target.parentNode.getAttribute('id');
        console.log(id);
        window.open("superhero.html?id="+id,"_self");
    }

    //if remove btn  is clicked, remove from Favourites 
    if(event.target.id==='heart-icon'){

        var id = event.target.parentNode.parentNode.getAttribute('id');
        event.target.parentNode.parentNode.remove();
        
    }

    

    //update favList in local storage
    localStorage.setItem("favList", JSON.stringify(favList));

    //msg for empty list
    if (favList.length===0)
        favContainer.innerHTML = '<div style="margin-top: 50px">no fav heros<div>'
}