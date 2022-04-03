let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
// let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
// let header = document.querySelector('header');
let dream = document.getElementById('dream');
let video = document.getElementById('video');



window.addEventListener('scroll', function(){
    // debugger
    let value = window.scrollY - dream.offsetTop;
    console.log(value, dream.offsetTop)
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
    // header.style.top = value * 0.5 + 'px';
})



//Video starter automatisk og sættes på pause ved scroll
// gsap.registerPlugin(ScrollTrigger);

//   ScrollTrigger.create({
//     trigger: videoElem,
//     onEnter: () => videoElem.play(),
//     onEnterBack: () => videoElem.play(),
//     onLeave: () => videoElem.pause(),
//     onLeaveBack: () => videoElem.pause(),
//   });

  function toggleSound(){
    console.log(video)
    video.muted = !video.muted
  }

