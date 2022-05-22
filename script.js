const JokeEl = document.getElementById("joke");
const get_joke = document.getElementById("btn_joke");
document.addEventListener('DOMContentLoaded', generateJoke);


get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke(){
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();

    JokeEl.innerText = jokeObj.joke;
}