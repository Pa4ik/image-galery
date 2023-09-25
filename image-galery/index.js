const CLIENT_ID = 'ofyoLJAcFjrVVZfB4DXLhMk2zI_iIOUtAIQK2HTaZs8'
const img = document.getElementById('img-galer')

let state = []

const fetchPhotos = async () => {
        const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=30`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.length){
            state = data;
            setPhotos();
        }

        console.log(data)  
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