//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url = "https://api.kanye.rest";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerHTML = `${data.quote} - Kanye`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
