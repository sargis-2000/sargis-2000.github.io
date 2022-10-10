let burger = document.querySelector('.burger');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
   line1.classList.toggle('line1-rotate');
   line2.classList.toggle('line2-rotate');  
   line3.classList.toggle('line3-remove');
   menu.classList.toggle('menu-show');
});

let signButton = document.querySelector('[data-sign="sign"]');
let mbsign = document.querySelector('[data-mbsign="mb-sign"]');
let signbox = document.querySelector('.sign');
let close = document.querySelector('.close');

signButton.addEventListener('click', function() {
   signbox.classList.add('sign-show');
   close.style.cursor = 'pointer';
});
close.addEventListener('click', function() {
   signbox.classList.remove('sign-show');
   close.style.cursor = 'default';
});
mbsign.addEventListener('click', function() {
   signbox.classList.add('sign-show');
});

$(document).ready(function() {
    $('.slider').slick({
       dots: true,
       infinite: true,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 5000,
       slidesToShow: 1,
       pauseOnFocus: false,
       pauseOnHover: false,
       pauseONDotsHover: false,
       responsive: [
          {
             breakpoint: 980,
             settings: {
                arrows: false
              }
          }
       ]
    });
});

const likeBtn1 = document.querySelector('#like-btn1');
let likeNum1 = document.querySelector('#like-num1');
let likeIcon1 = document.querySelector('#like-icon1');
let cliked1 = false;

likeBtn1.addEventListener('click', () => {
    if(!cliked1) {
        cliked1 = true;
        likeNum1.textContent++;
        likeIcon1.src = 'images/like.svg';
    } else {
        cliked1 = false;
        likeNum1.textContent--;
        likeIcon1.src = 'images/like-disabled.svg';
    }
});

const likeBtn2 = document.querySelector('#like-btn2');
let likeNum2 = document.querySelector('#like-num2');
let likeIcon2 = document.querySelector('#like-icon2');
let cliked2 = false;

likeBtn2.addEventListener('click', () => {
    if(!cliked2) {
        cliked2 = true;
        likeNum2.textContent++;
        likeIcon2.src = 'images/like.svg';
    } else {
        cliked2 = false;
        likeNum2.textContent--;
        likeIcon2.src = 'images/like-disabled.svg';
    }
});

const likeBtn3 = document.querySelector('#like-btn3');
let likeNum3 = document.querySelector('#like-num3');
let likeIcon3 = document.querySelector('#like-icon3');
let cliked3 = false;

likeBtn3.addEventListener('click', () => {
    if(!cliked3) {
        cliked3 = true;
        likeNum3.textContent++;
        likeIcon3.src = 'images/like.svg';
    } else {
        cliked3 = false;
        likeNum3.textContent--;
        likeIcon3.src = 'images/like-disabled.svg';
    }
});

const likeBtn4 = document.querySelector('#like-btn4');
let likeNum4 = document.querySelector('#like-num4');
let likeIcon4 = document.querySelector('#like-icon4');
let cliked4 = false;

likeBtn4.addEventListener('click', () => {
    if(!cliked4) {
        cliked4 = true;
        likeNum4.textContent++;
        likeIcon4.src = 'images/like.svg';
    } else {
        cliked4 = false;
        likeNum4.textContent--;
        likeIcon4.src = 'images/like-disabled.svg';
    }
});

const likeBtn5 = document.querySelector('#like-btn5');
let likeNum5 = document.querySelector('#like-num5');
let likeIcon5 = document.querySelector('#like-icon5');
let cliked5 = false;

likeBtn5.addEventListener('click', () => {
    if(!cliked5) {
        cliked5 = true;
        likeNum5.textContent++;
        likeIcon5.src = 'images/like.svg';
    } else {
        cliked5 = false;
        likeNum5.textContent--;
        likeIcon5.src = 'images/like-disabled.svg';
    }
});

const likeBtn6 = document.querySelector('#like-btn6');
let likeNum6 = document.querySelector('#like-num6');
let likeIcon6 = document.querySelector('#like-icon6');
let cliked6 = false;

likeBtn6.addEventListener('click', () => {
    if(!cliked6) {
        cliked6 = true;
        likeNum6.textContent++;
        likeIcon6.src = 'images/like.svg';
    } else {
        cliked6 = false;
        likeNum6.textContent--;
        likeIcon6.src = 'images/like-disabled.svg';
    }
});

const playbtn1 = document.querySelector('#play-btn1');
let video1Zoom = document.querySelector('#video1-zoom');
let video1Hide = document.querySelector('#video1-hide');

playbtn1.addEventListener('click', () => {
    video1Zoom.style.opacity = '1';
    video1Zoom.style.visibility = 'visible';
});

video1Hide.addEventListener('click', () => {
    video1Zoom.removeAttribute('style');
});

const playbtn2 = document.querySelector('#play-btn2');
let video2Zoom = document.querySelector('#video2-zoom');
let video2Hide = document.querySelector('#video2-hide');

playbtn2.addEventListener('click', () => {
    video2Zoom.style.opacity = '1';
    video2Zoom.style.visibility = 'visible';
});

video2Hide.addEventListener('click', () => {
    video2Zoom.removeAttribute('style');
});

const playbtn3 = document.querySelector('#play-btn3');
let video3Zoom = document.querySelector('#video3-zoom');
let video3Hide = document.querySelector('#video3-hide');

playbtn3.addEventListener('click', () => {
    video3Zoom.style.opacity = '1';
    video3Zoom.style.visibility = 'visible';
});

video3Hide.addEventListener('click', () => {
    video3Zoom.removeAttribute('style');
});

const playbtn4 = document.querySelector('#play-btn4');
let video4Zoom = document.querySelector('#video4-zoom');
let video4Hide = document.querySelector('#video4-hide');

playbtn4.addEventListener('click', () => {
    video4Zoom.style.opacity = '1';
    video4Zoom.style.visibility = 'visible';
});

video4Hide.addEventListener('click', () => {
    video4Zoom.removeAttribute('style');
});

const playbtn5 = document.querySelector('#play-btn5');
let video5Zoom = document.querySelector('#video5-zoom');
let video5Hide = document.querySelector('#video5-hide');

playbtn5.addEventListener('click', () => {
    video5Zoom.style.opacity = '1';
    video5Zoom.style.visibility = 'visible';
});

video5Hide.addEventListener('click', () => {
    video5Zoom.removeAttribute('style');
});

const playbtn6 = document.querySelector('#play-btn6');
let video6Zoom = document.querySelector('#video6-zoom');
let video6Hide = document.querySelector('#video6-hide');

playbtn6.addEventListener('click', () => {
    video6Zoom.style.opacity = '1';
    video6Zoom.style.visibility = 'visible';
});

video6Hide.addEventListener('click', () => {
    video6Zoom.removeAttribute('style');
});

let options0 = {
    threshold: 0.3
}

let show0 = function(entries) {
    entries.forEach(entry => {
        let{target, isIntersecting} = entry;

        if(isIntersecting) {
            target.style.opacity = '1';
        }
    });
}

let observer0 = new IntersectionObserver(show0, options0);
let videos = document.querySelectorAll('.video1');
videos.forEach(items => {
    observer0.observe(items);
});

let options10 = {
    threshold: 0.1
 }
 
 let show6 = function(entries) {
    entries.forEach(entry => {
        let{target, isIntersecting} = entry;
 
        if(isIntersecting) {
          target.style.opacity = '1';
        }
    });
 }
 
 let observer10 = new IntersectionObserver(show6, options10);
 let statistics = document.querySelector('.statistics');
 observer10.observe(statistics);
 
 let options11 = {
    threshold: 1
 }
 
 let show7 = function(entries) {
    entries.forEach(entry => {
        let{target, isIntersecting} = entry;
 
        if(isIntersecting) {
          target.style.opacity = '1';
        }
    });
 }
 
 let observer11 = new IntersectionObserver(show7, options11);
 let statisticsitem = document.querySelector('.statistics-item1');
 observer11.observe(statisticsitem);

let options1 = {
    threshold: 1
 }
 
 let change1 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry
 
       if(isIntersecting) {
          let num1 = 0;
          let interval;
 
          interval = setInterval(function() {
             num1 += 25;
             target.innerHTML = num1;
 
             if(num1 == 32000) {
                clearInterval(interval);
             }
             observer.unobserve(target);
          });
       }
    });
 }
 
 let observer = new IntersectionObserver(change1, options1);
 let clientnum = document.querySelector('#num1');
 observer.observe(clientnum);
 
 let options2 = {
    threshold: 1
 }
 
 let change2 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
          let num2 = 0;
          let interval;
 
          interval = setInterval(function() {
             num2 += 25;
             target.innerHTML = num2;
 
             if(num2 == 32200) {
                clearInterval(interval);
             }
             observer2.unobserve(target);
          });
       }
    });
 }
 
 let observer2 = new IntersectionObserver(change2, options2);
 let tournum = document.querySelector('#num2');
 observer2.observe(tournum);
 
 let options3 = {
    threshold: 1
 }
 
 let change3 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
         let num3 = 0;
         let interval;
 
         interval = setInterval(function() {
            num3 += 25;
            target.innerHTML = num3;
 
            if(num3 == 10000) {
             clearInterval(interval);
            }
            observer3.unobserve(target);
         });
       }
    });
 }
 
 let observer3 = new IntersectionObserver(change3, options3);
 let businessnum = document.querySelector('#num3');
 observer3.observe(businessnum);
 
 let options4 = {
    threshold: 1
 }
 
 let change4 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
 
          let num4 = 0;
          let interval;
 
          interval = setInterval(function() {
             num4 += 25;
             target.innerHTML = num4;
 
             if(num4 == 5000) {
                clearInterval(interval);
             }
             observer4.unobserve(target);
          });
       }
    });
 }
 
let observer4 = new IntersectionObserver(change4, options4);
let supportnum = document.querySelector('#num4');
observer4.observe(supportnum);

$(document).ready(function() {
    $('.partners-item2').slick({
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 5000,
       pauseOnFocus: false,
       pauseOnHover: false,
       dots: true,
       variableWidth: true,
       responsive: [
          {
             breakpoint: 1121,
             settings: {
                arrows: false,
             }
          },
          {
             breakpoint: 980,
             settings: {
                slidesToShow: 3,
                arrows: false,
             }
          },
          {
             breakpoint: 685,
             settings: {
                slidesToShow: 2,
                arrows: false,
             }
          },
          {
             breakpoint: 475,
             settings: {
                slidesToShow: 1,
                arrows: false,
             }
          }
       ]
    });
});

let options14 = {
    threshold: 0.1
 }
 
 let show10 = function(entries) {
    entries.forEach(entry => {
       let{target,isIntersecting} = entry;
 
       if(isIntersecting) {
          target.style.opacity = '1';
       }
    });
 }
 
let observer14 = new IntersectionObserver(show10, options14);
let partners = document.querySelector('.partners');
observer14.observe(partners);
 
let options15 = {
    threshold: 1
}
 
let show11 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
          target.style.opacity = '1';
       }
    });
}
 
let observer15 = new IntersectionObserver(show11,options15);
let partnerstitle = document.querySelector('#partners-title');
observer15.observe(partnerstitle);

$(document).ready(function() {
    $('.testimonials-item2').slick({
       infinite: true,
       slidesToShow: 3,
       autoplay: true,
       speed: 150,
       autoplaySpeed: 5000,
       dots: true,
       pauseOnFocus: false,
       pauseOnHover: false,
       centerMode: true,
       variableWidth: true,
       responsive: [
          {
             breakpoint: 1354,
             settings: {
                arrows: false,
             }
          },
          {
             breakpoint: 1273,
             settings: {
                arrows: false,
                slidesToShow: 2,
                centerMode: false,
             }
          },
          {
             breakpoint: 1273,
             settings: {
                arrows: false,
                slidesToShow: 1,
                centerMode: false,
             }
          }
       ]
    });
});

let options17 = {
    threshold: 0.1
}
 
let show13 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
          target.style.opacity = '1';
       }
    });
}
 
let observer17 = new IntersectionObserver(show13, options17);
let testimonials = document.querySelector('.testimonials');
observer17.observe(testimonials);

let options18 = {
    threshold: 1
}
 
let show14 = function(entries) {
    entries.forEach(entry => {
       let{target,isIntersecting} = entry;
 
       if(isIntersecting) {
          target.style.opacity = '1';
       }
    });
}
 
let observer18 = new IntersectionObserver(show14, options18);
let testimonial1 = document.querySelectorAll('[data-testimonial="testimonial1"]');
testimonial1.forEach(items => {
    observer18.observe(items);
});

let options19 = {
    threshold: 1
}
 
let show15 = function(entries) {
    entries.forEach(entry => {
       let{target, isIntersecting} = entry;
 
       if(isIntersecting) {
          target.style.opacity = '1';
       }
    });
}
 
let observer19 = new IntersectionObserver(show15, options19);
let footerItems = document.querySelectorAll('[ data-footerItems="footerItems"]');
footerItems.forEach(items => {
    observer19.observe(items);
});

let options20 = {
    threshold: 1
}
 
let show20 = function(entries) {
    entries.forEach(entry => {
       let{isIntersecting} = entry;
 
       if(!isIntersecting) {
         topBtn.style.transform = 'translateX(0)';
       } else {
          topBtn.removeAttribute('style');
       }
    });
}
 
let observer20 = new IntersectionObserver(show20,options20);
let nav = document.querySelector('.nav');
let topBtn = document.querySelector('.top');
observer20.observe(nav);

topBtn.addEventListener('click', function() {
    setTimeout(function() {
       window.scrollTo({
          top: 0,
          behavior: "smooth"
       });
    },300)
});

window.onload = function() {
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-hide');
}