let body = document.querySelector('body');
let changeThemeBtn = document.getElementById('btn');
let cloudsStars = document.getElementById('clouds-stars');
let catImage = document.getElementById('cat-img');

changeThemeBtn.addEventListener('click' , () => {

    // Change Background & clouds-stars
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        cloudsStars.classList.add('clouds');
        cloudsStars.classList.remove('stars');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        cloudsStars.classList.remove('clouds');
        cloudsStars.classList.add('stars');
    }

    // Rotate the cat image
    catImage.style.animation = 'catRotate 0.8s';
    setTimeout(() => {
        catImage.style.animation = 'none';
    },800)
})