const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(e) {
  if (e.preventDefault) {
    e.preventDefault(); // prevent page from reloading...
  }
  searchField = document.getElementById("searchField").value;
  document.getElementById("output").innerHTML = searchField;

  return false;
});


/*
function processForm(e) {
  if (e.preventDefault) e.preventDefault();

   do what you want with the form 

   You must return false to prevent the default form behavior
  return false;
}
*/