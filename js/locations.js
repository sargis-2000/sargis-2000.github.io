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

let location1 = document.querySelector('#location1');
let zoom1 = document.querySelector('#zoom1');
let zoomhidden1 = document.querySelector('.zoom-hidden');
let location1zoom = document.querySelector('.location1-zoom');
let zoomicon1 = document.querySelector('#icon1');
let location1Container = document.querySelector('.location1-image-container img');

location1.addEventListener('mouseover', () => {
   zoom1.style.opacity = '1';
});

location1.addEventListener('mouseout', () => {
   zoom1.removeAttribute('style');
});

zoom1.addEventListener('mouseover', () => {
   zoom1.style.backgroundColor = '#fff';
   zoomicon1.src = 'images/zoom2.svg';
});

zoom1.addEventListener('mouseout', () => {
   zoom1.removeAttribute('style');
   zoomicon1.src = 'images/zoom1.svg';
});


zoom1.addEventListener('click', () => {
   location1zoom.style.transform = 'scale(1)';
});

zoomhidden1.addEventListener('click', () => {
   location1zoom.removeAttribute('style');
});

location1Container.addEventListener('click', () => {
   location1zoom.removeAttribute('style');
});

let location2 = document.querySelector('#location2');
let zoom2 = document.querySelector('#zoom2');
let zoomhidden2 = document.querySelector('.zoom2-hidden');
let location2zoom = document.querySelector('.location2-zoom');
let zoomicon2 = document.querySelector('#icon2');
let location2Container = document.querySelector('.location2-image-container img');

location2.addEventListener('mouseover', () => {
   zoom2.style.opacity = '1';
});

location2.addEventListener('mouseout', () => {
   zoom2.removeAttribute('style');
});

zoom2.addEventListener('mouseover', () => {
   zoom2.style.backgroundColor = '#fff';
   zoomicon2.src = 'images/zoom2.svg';
});

zoom2.addEventListener('mouseout', () => {
   zoom2.removeAttribute('style');
   zoomicon2.src = 'images/zoom1.svg';
});


zoom2.addEventListener('click', () => {
   location2zoom.style.transform = 'scale(1)';
});

zoomhidden2.addEventListener('click', () => {
   location2zoom.removeAttribute('style');
});

location2Container.addEventListener('click', () => {
   location2zoom.removeAttribute('style');
});


let location3 = document.querySelector('#location3');
let zoom3 = document.querySelector('#zoom3');
let zoomhidden3 = document.querySelector('.zoom3-hidden');
let location3zoom = document.querySelector('.location3-zoom');
let zoomicon3 = document.querySelector('#icon3');
let location3Container = document.querySelector('.location3-image-container img');

location3.addEventListener('mouseover', () => {
   zoom3.style.opacity = '1';
});

location3.addEventListener('mouseout', () => {
   zoom3.removeAttribute('style');
});

zoom3.addEventListener('mouseover', () => {
   zoom3.style.backgroundColor = '#fff';
   zoomicon3.src = 'images/zoom2.svg';
});

zoom3.addEventListener('mouseout', () => {
   zoom3.removeAttribute('style');
   zoomicon3.src = 'images/zoom1.svg';
});


zoom3.addEventListener('click', () => {
   location3zoom.style.transform = 'scale(1)';
});

zoomhidden3.addEventListener('click', () => {
   location3zoom.removeAttribute('style');
});

location3Container.addEventListener('click', () => {
   location3zoom.removeAttribute('style');
});

let location4 = document.querySelector('#location4');
let zoom4 = document.querySelector('#zoom4');
let zoomhidden4 = document.querySelector('.zoom4-hidden');
let location4zoom = document.querySelector('.location4-zoom');
let zoomicon4 = document.querySelector('#icon4');
let location4Container = document.querySelector('.location4-image-container img');

location4.addEventListener('mouseover', () => {
   zoom4.style.opacity = '1';
});

location4.addEventListener('mouseout', () => {
   zoom4.removeAttribute('style');
});

zoom4.addEventListener('mouseover', () => {
   zoom4.style.backgroundColor = '#fff';
   zoomicon4.src = 'images/zoom2.svg';
});

zoom4.addEventListener('mouseout', () => {
   zoom4.removeAttribute('style');
   zoomicon4.src = 'images/zoom1.svg';
});


zoom4.addEventListener('click', () => {
   location4zoom.style.transform = 'scale(1)';
});

zoomhidden4.addEventListener('click', () => {
   location4zoom.removeAttribute('style');
});

location4Container.addEventListener('click', () => {
   location4zoom.removeAttribute('style');
});

let location5 = document.querySelector('#location5');
let zoom5 = document.querySelector('#zoom5');
let zoomhidden5 = document.querySelector('.zoom5-hidden');
let location5zoom = document.querySelector('.location5-zoom');
let zoomicon5 = document.querySelector('#icon5');
let location5Container = document.querySelector('.location5-image-container img');

location5.addEventListener('mouseover', () => {
   zoom5.style.opacity = '1';
});

location5.addEventListener('mouseout', () => {
   zoom5.removeAttribute('style');
});

zoom5.addEventListener('mouseover', () => {
   zoom5.style.backgroundColor = '#fff';
   zoomicon5.src = 'images/zoom2.svg';
});

zoom5.addEventListener('mouseout', () => {
   zoom5.removeAttribute('style');
   zoomicon5.src = 'images/zoom1.svg';
});

zoom5.addEventListener('click', () => {
   location5zoom.style.transform = 'scale(1)';
});

zoomhidden5.addEventListener('click', () => {
   location5zoom.removeAttribute('style');
});

location5Container.addEventListener('click', () => {
   location5zoom.removeAttribute('style');
});


let location6 = document.querySelector('#location6');
let zoom6 = document.querySelector('#zoom6');
let zoomhidden6 = document.querySelector('.zoom6-hidden');
let location6zoom = document.querySelector('.location6-zoom');
let zoomicon6 = document.querySelector('#icon6');
let location6Container = document.querySelector('.location6-image-container img');

location6.addEventListener('mouseover', () => {
   zoom6.style.opacity = '1';
});

location6.addEventListener('mouseout', () => {
   zoom6.removeAttribute('style');
});

zoom6.addEventListener('mouseover', () => {
   zoom6.style.backgroundColor = '#fff';
   zoomicon6.src = 'images/zoom2.svg';
});

zoom6.addEventListener('mouseout', () => {
   zoom6.removeAttribute('style');
   zoomicon6.src = 'images/zoom1.svg';
});

zoom6.addEventListener('click', () => {
   location6zoom.style.transform = 'scale(1)';
});

zoomhidden6.addEventListener('click', () => {
   location6zoom.removeAttribute('style');
});

location6Container.addEventListener('click', () => {
   location6zoom.removeAttribute('style');
});

let likeNum1 = document.querySelector('#likeNum1');
let likeIcon1 = document.querySelector('#like-icon1');
const likeBtn1 = document.querySelector('#like-btn1');
let clicked1 = false;

likeBtn1.addEventListener('click', () => {
   if(!clicked1) {
      clicked1 = true;
      likeNum1.textContent++;
      likeIcon1.src = 'images/like.svg';
   } else {
      clicked1 = false;
      likeNum1.textContent--;
      likeIcon1.src = 'images/like-disabled.svg';
   }
});

let likeNum2 = document.querySelector('#likeNum2');
let likeIcon2 = document.querySelector('#like-icon2');
const likeBtn2 = document.querySelector('#like-btn2');
let clicked2 = false;

likeBtn2.addEventListener('click', () => {
   if(!clicked2) {
      clicked2 = true;
      likeNum2.textContent++;
      likeIcon2.src = 'images/like.svg';
   } else {
      clicked2 = false;
      likeNum2.textContent--;
      likeIcon2.src = 'images/like-disabled.svg';
   }
});

let likeNum3 = document.querySelector('#likeNum3');
let likeIcon3 = document.querySelector('#like-icon3');
const likeBtn3 = document.querySelector('#like-btn3');
let clicked3 = false;

likeBtn3.addEventListener('click', () => {
   if(!clicked3) {
      clicked3 = true;
      likeNum3.textContent++;
      likeIcon3.src = 'images/like.svg';
   } else {
      clicked3 = false;
      likeNum3.textContent--;
      likeIcon3.src = 'images/like-disabled.svg';
   }
});

let likeNum4 = document.querySelector('#likeNum4');
let likeIcon4 = document.querySelector('#like-icon4');
const likeBtn4 = document.querySelector('#like-btn4');
let clicked4 = false;

likeBtn4.addEventListener('click', () => {
   if(!clicked4) {
      clicked4 = true;
      likeNum4.textContent++;
      likeIcon4.src = 'images/like.svg';
   } else {
      clicked4 = false;
      likeNum4.textContent--;
      likeIcon4.src = 'images/like-disabled.svg';
   }
});

let likeNum5 = document.querySelector('#likeNum5');
let likeIcon5 = document.querySelector('#like-icon5');
const likeBtn5 = document.querySelector('#like-btn5');
let clicked5 = false;

likeBtn5.addEventListener('click', () => {
   if(!clicked5) {
      clicked5 = true;
      likeNum5.textContent++;
      likeIcon5.src = 'images/like.svg';
   } else {
      clicked5 = false;
      likeNum5.textContent--;
      likeIcon5.src = 'images/like-disabled.svg';
   }
});

let likeNum6 = document.querySelector('#likeNum6');
let likeIcon6 = document.querySelector('#like-icon6');
const likeBtn6 = document.querySelector('#like-btn6');
let clicked6 = false;

likeBtn6.addEventListener('click', () => {
   if(!clicked6) {
      clicked6 = true;
      likeNum6.textContent++;
      likeIcon6.src = 'images/like.svg';
   } else {
      clicked6 = false;
      likeNum6.textContent--;
      likeIcon6.src = 'images/like-disabled.svg';
   }
});

let options = {
   threshold: 0.5
}

let show = function(entries) {
   entries.forEach(entry => {
      let{target, isIntersecting} = entry;

      if(isIntersecting) {
         target.style.opacity = '1';
      }
   });
}

let observer1 = new IntersectionObserver(show, options);
let locations = document.querySelectorAll('.location');
locations.forEach(items => {
   observer1.observe(items);
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