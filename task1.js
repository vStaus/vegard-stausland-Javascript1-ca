

const url = "https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f";
const proxy = "https://noroffcors.herokuapp.com/"

const corsFix = proxy + url


const resultsContainer = document.querySelector(".results");

fetch(url)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        createHTML(data);
    })
    .catch(function(error){
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occured when calling the API")
    })

    function createHTML(results){
        const facts = results.all;
       
        resultsContainer.innerHTML = "";

        for (let i = 0; i < facts.length; i++){
            if (i == 8){
                break;
            }
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    }

async function makeApiCall() {
    try{
        const response = await fetch(corsFix);

        const data = await response.json();

        const facts = data.all;

        resultsContainer.innerHTML = ".id";

        for (let i = 0; i < facts.length; i++){
            if (i == 8){
                break;
            }
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    } catch (error){
        resultsContainer.innerHTML = displayError("An error occured when calling the API")
    }
}

makeApiCall();

