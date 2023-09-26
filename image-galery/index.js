const CLIENT_ID = 'ofyoLJAcFjrVVZfB4DXLhMk2zI_iIOUtAIQK2HTaZs8'
const img = document.getElementById('img-galer')
const inputSearch = document.querySelector(".inputcl")
const search = document.getElementById('search')






document.querySelector("#input").addEventListener("keydown", (event) => {
    if (event.key == "Enter")
    fetchPhotos();
  });
  
  document.querySelector("#search").addEventListener("click", () => {
    fetchPhotos();
  });


  document.getElementById("close").onclick = function(e) {
    document.getElementById("input").value = "";
  }



let state = {}

const fetchPhotos = async () => {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=30&query=`+input.value;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.length){
            state = data;
            setPhotos();
        }
    };

 const renderItem = () => {
    return  state
    .map(( { urls: {regular} , user:{instagram_username}, user:{name} } ) =>  {
        return ` <div class="container">
        <div class="img" style="background-image: url(${regular});"></div>
        <span class="photoby">Photo by</span>
        <span class="phby">${name}</span>
        <a class="svg-inst" href="https://www.instagram.com/${instagram_username}/" target="_blank">
            <img class="inst-svg" src="svg/inst.png" alt="inst">
        </a>
</div>`
    }).join("")
 }   

const setPhotos = () =>{
  img.innerHTML = renderItem();
}
     

fetchPhotos();