const movieList = document.querySelector(".title");
const movieTitle= document.querySelector(".movieTitle");
const URL ="https://dapi.kakao.com/v2/search/image"
const API = "281d03f9e90c5bd1e623d0033dbaf5ef"
const inputImg = document.querySelector("img");
const movieApi = "19ef4808bf86257c609bd5bb79ed2f59";

document.title="recommend movie for u"



function getMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=19ef4808bf86257c609bd5bb79ed2f59&language=en-US&page=1`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function(json) {
        var factor = Date.now();
        var rndNum= Math.floor(Math.random(factor)*10);
        const movieInfo= (json.results[rndNum]);
        const title = movieInfo.title;
        const rate = movieInfo.vote_average;
        const poster = movieInfo.poster_path;
        inputImg.src=`https://image.tmdb.org/t/p/w500/${poster}`;
        movieTitle.innerHTML=`Title: ${title} / rate: ${rate}`;
      })
  }


function getSingerImage() {
    console.log(URL);
    console.log(API);
    fetch("https://dapi.kakao.com/v2/search/image?query=postmalone sunflower", 
                { method: "get" ,
                
                headers : {Authorization:"KakaoAK c18da2f60b2aae68018b2e22a95edae5"}}
).then(function(response){
    
    return response.json();
}).then(function(json){
    console.log(json)
    const rnd = rndNum;
    console.log(rnd);
    const img = json.documents[rnd].image_url;
    
    
})
   
}
getMovie();
setInterval(getMovie,7000);
