"use strict"

const searchBtn = document.getElementById("searchBtn");
const outputDiv = document.getElementById("output");


searchBtn.addEventListener("click", function (e) {
  if (e.preventDefault) {
    e.preventDefault(); // prevent page from reloading...
  }
  let searchString = document.getElementById("searchField").value;

  if (searchString == "") {

    clearOutputDiv();

  } else {

    queryWikipedia(searchString);

  }

  return false;
});


function queryWikipedia(searchString) {

  // TODO: change to fetch maybe
  let xhr = new XMLHttpRequest();
  const endPoint = 'https://en.wikipedia.org/w/api.php';
  let url = `${endPoint}?action=opensearch&search="${searchString}"&format=json&origin=*`;


  xhr.open('GET', url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) { // if success

        let result = JSON.parse(xhr.responseText);
        writeArticles(result);

      }
    } else {
      outputDiv.innerHTML = "Error: nothing from API";
    }
  };

  xhr.send();
}

function writeArticles(results) {

  let numArticles = results[1].length;
  let titles = []; // results[1];
  let tldr = []; // results[2];
  let urls = []; // results[3];

  let articles = [];

  for (let i = 0; i < numArticles; i++) {
    articles[i] = document.createElement("article");
    titles[i] = document.createElement("h3");
    tldr[i] = document.createElement("p");
    urls[i] = document.createElement("a");

    titles[i].innerHTML = results[1][i];
    tldr[i].innerHTML = results[2][i];
    urls[i].setAttribute("href", results[3][i]);
    urls[i].innerHTML = "Go to wikipedia";

    articles[i].appendChild(titles[i]);
    articles[i].appendChild(tldr[i]);
    articles[i].appendChild(urls[i]);
    outputDiv.appendChild(articles[i]);
  }


  outputDiv.style.display = "block";

}

function clearOutputDiv() {
  outputDiv.innerHTML = "";
  outputDiv.style.display = "none";
}