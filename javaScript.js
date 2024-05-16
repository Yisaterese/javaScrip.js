//https://api.themoviedb.org/3/movie5ee8f27402aa22b8b96429569b263e47
const API_KEY = "api_key=5ee8f27402aa22b8b96429569b263e47"
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_URL = `${API_URL}/movie/popular?${API_KEY}`;
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;

const getMovies = (url)=>{
    fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data.results);
            showMovies(data.results);
        })
        .catch((error)=>console.log(error));
}
getMovies(MOVIE_URL);
const movieDetails = document.querySelector(".movieContainer");
console.log(movieDetails)
const imageUrl = "https://image.tmdb.org/t/p/w500"
const showMovies = (movies)=> {
    movieDetails.innerHTML = ''
    movies.forEach(movie =>{
        const {title,overview,poster_path, vote_average} = movie;
        const divTag = document.createElement("div")
        divTag.classList.add("movieDetails");
        divTag.innerHTML = `
                <img src="${imageUrl}${poster_path}" alt=""/>
                <div class="movieTitle">
                    <h2>${title}</h2>
                    <h2>${vote_average}</h2>
                    <h2>OverView</h2>
                    <p>
                        ${overview}
                    </p>`

        movieDetails.appendChild(divTag);

    })
}

const  form = document.querySelector("#search");
const search = document.querySelector("#searchInput");
form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if(searchValue){
        getMovies(SEARCH_URL + "&query=" + searchValue);
    }else{
            getMovies(API_URL);
        }
})
