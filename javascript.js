let stars = document.getElementById('stars');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');
let dream = document.getElementById('dream');
let video = document.getElementById('video');
let video2 = document.getElementById('video2');
let lyd = document.getElementById('lyd');
let lyd2 = document.getElementById('lyd2');






window.addEventListener('scroll', function(){
    // debugger
    let value = window.scrollY - dream.offsetTop;
    stars.style.left = value * 0.25 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.paddingBottom = value * 7 + 'px';
    text.style.paddingRight = value * 7 + 'px';

   
})





  function toggleSound(){
    console.log(video)
    video.muted = !video.muted
    lyd.src = video.muted ? "images/lyd.png" : "images/lydaf.png"
  }

 
  function toggleSound2(){
    console.log(video)
    video2.muted = !video2.muted
    lyd2.src = video2.muted ? "images/lyd.png" : "images/lydaf.png"
  }

