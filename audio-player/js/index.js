console.log('10/60');

// переключение кнопки плей и паузы 
let getImg = document.getElementsByClassName('pl-pa');    
for (let i = 0; i < getImg.length; i++) {
    getImg[i].onclick = function (objTarget) {
        let imgTarget = objTarget.target;
        let imgClick = imgTarget.getAttribute('data-replace');
        let imgSrc = imgTarget.src;

        imgTarget.setAttribute('data-replace',imgSrc);
        imgTarget.setAttribute('src',imgClick);    
    }
}


