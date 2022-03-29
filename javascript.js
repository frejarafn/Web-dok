// Himmel = mountainfront
// stars er stars:)
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let himmel = document.getElementById('himmel');
let text = document.getElementById('text');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 50 + 'px';
    moon.style.top = value * 1.05 + 'px';
    himmel.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
})