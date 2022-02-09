const $gifArea = $("#gif-area");
const $searchInput = $("#search");

// add a gif
function addGif(res){
  let numRes = res.data.length;
  if(numRes) {
    let randomIdx = Math.floor(Math.random()*numRes);
    let $newCol = $("<div>");
    let $newGif = $ ("<img>", {
      src: res.data[randomIdx].images.original.url,
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

$("form").on("submit", async function(e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");
  
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

// remove gif
$("#remove").on("click", function(){
  $gifArea.empty();
});