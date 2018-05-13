const searchBtn = document.getElementById("searchBtn");
const outputSection = document.getElementById("output");


searchBtn.addEventListener("click", function (e) {
  if (e.preventDefault) {
    e.preventDefault(); // prevent page from reloading...
  }
  let searchString = document.getElementById("searchField").value;

  if (searchString == "") {

    clearOutputSection();

  } else {


    writeToOutputSection(getDummyArticle());
  }

  return false;
});


function getDummyArticle() {
  let dummyArticle = document.createElement("article");
  dummyArticle.innerHTML = "<h3>loremtitle</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laboriosam quae ipsam eos veritatis fuga rem quasi vel odit voluptates a nam perspiciatis sint assumenda, cumque cum doloremque. Neque, eveniet!</p>";
  return dummyArticle;
}

function clearOutputSection() {
  let titleText = "<h2>Results</h2>";
  outputSection.innerHTML = titleText;
  outputSection.style.display = "none";
}

function writeToOutputSection(article) {
  outputSection.appendChild(article);
  outputSection.style.display = "block";
}

/*
function processForm(e) {
  if (e.preventDefault) e.preventDefault();

   do what you want with the form

   You must return false to prevent the default form behavior
  return false;
}
*/