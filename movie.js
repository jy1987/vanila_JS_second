const movieList = document.querySelector(".title");


document.title="recommend movie for u"

function handlerClick (){
    movieList.classList.toggle("clicked");
    //console.log(a);
}
   
function init(){ 
    movieList.addEventListener("click", handlerClick)
}

init();