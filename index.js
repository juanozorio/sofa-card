const img = document.querySelector('.sofa');
const icon = document.querySelector('.icon');

let staticImage = true;

function switchImages() { 
    if(staticImage) {
        icon.src = 'assets/icon-360.svg';
        img.src = 'assets/sofa.gif';
        staticImage = false;
    } else {
        icon.src = 'assets/icon-x.svg';
        img.src = 'assets/sofa-img.svg';
        staticImage = true;
    }
}
