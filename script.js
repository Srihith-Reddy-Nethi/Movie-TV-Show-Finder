const textbox = document.getElementById("text");
const search = document.getElementById("button");
const moviedetails = document.getElementById('movie');

const apikey = "99328bbd";

search.addEventListener("click", async ()=>{

    const title = textbox.value.trim();
    if(!title){
        alert('Please enter a movie Title');
        return;
    }

    try{

        const response = await fetch(`http://www.omdbapi.com/?apikey=99328bbd&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if(data.response === "False"){
            document.getElementById('movie').innerHTML = `<p>${data.error}</p>`;
            return;
        }
        console.log(data);
        
        document.getElementById('movie').innerHTML = `
        <div class="movielist">
        <h2> ${data.Title}       ${data.Year}</h2>
        <br>
        <img src="${data.Poster}">
        <h3> Date Of Release : ${data.Released} <h3>
        <h3> Runtime : ${data.Runtime} </h3>
        <h3> Director : ${data.Director} </h3>
        <h3> Genre : ${data.Genre} </h3> <br>
        <h3> plot : ${data.Plot} </h3> <br>
        <h3> imdb Rating : ${data.imdbRating}</h3>

        </div>
        `;   
    }


catch(error){
    document.getElementById('movie').innerHTML = "<p>Failed to get details</p>";
}
});
