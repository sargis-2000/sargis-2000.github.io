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

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');

let icon = document.querySelector('.icon');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');
let icon4 = document.querySelector('.icon4');

let item1Title1 = document.querySelector('#item1-title1');
let item1Title2 = document.querySelector('#item1-title2');
let item2Title1 = document.querySelector('#item2-title1');
let item2Title2 = document.querySelector('#item2-title2');
let item3Title1 = document.querySelector('#item3-title1');
let item3Title2 = document.querySelector('#item3-title2');
let item4Title1 = document.querySelector('#item4-title1');
let item4Title2 = document.querySelector('#item4-title2');

let item1rotate;
item1rotate = setInterval(function() {
   item1.classList.toggle('item1-rotate');
   item1.style.transition = '1s ease-out';
}, 6000);

let item2rotate;
item2rotate = setInterval(function() {
   item2.classList.toggle('item2-rotate');
   item2.style.transition = '1s ease-out';
}, 6000);

let item3rotate;
item3rotate = setInterval(function() {
   item3.classList.toggle('item3-rotate');
   item3.style.transition = '1s ease-out';
}, 6000);

let item4rotate;
item4rotate = setInterval(function() {
   item4.classList.toggle('item4-rotate');
   item4.style.transition = '1s ease-out';
}, 6000);

item1.addEventListener('mouseover', function() {
   icon.style.backgroundColor = '#fff';
   icon.style.transition = '.5s ease-out';
   item1Title1.style.color = '#fff';
   item1Title1.style.transition = '.5s ease-out';
   item1Title2.style.color = '#fff';
   item1Title2.style.transition = '.5s ease-out';
   clearInterval(item1rotate);
   clearInterval(item2rotate);
   clearInterval(item3rotate);
   clearInterval(item4rotate);
});
item1.addEventListener('mouseout', function() {
   icon.style.backgroundColor = null;
   item1Title1.style.color = null;
   item1Title2.style.color = null;
   item1rotate = setInterval(function() {
      item1.classList.toggle('item1-rotate');
      item1.style.transition = '1s ease-out';
   }, 6000);
   item2rotate = setInterval(function() {
      item2.classList.toggle('item2-rotate');
      item2.style.transition = '1s ease-out';
   }, 6000);
   item3rotate = setInterval(function() {
      item3.classList.toggle('item3-rotate');
      item3.style.transition = '1s ease-out';
   }, 6000);
   item4rotate = setInterval(function() {
      item4.classList.toggle('item4-rotate');
      item4.style.transition = '1s ease-out';
   }, 6000);
});

item2.addEventListener('mouseover', function() {
   icon2.style.backgroundColor = '#fff';
   icon2.style.transition = '.5s ease-out';
   item2Title1.style.color = '#fff';
   item2Title1.style.transition = '.5s ease-out';
   item2Title2.style.color = '#fff';
   item2Title2.style.transition = '.5s ease-out';
   clearInterval(item1rotate);
   clearInterval(item2rotate);
   clearInterval(item3rotate);
   clearInterval(item4rotate);
});
item2.addEventListener('mouseout', function() {
   icon2.style.backgroundColor = null;
   item2Title1.style.color = null;
   item2Title2.style.color = null;
   item1rotate = setInterval(function() {
      item1.classList.toggle('item1-rotate');
      item1.style.transition = '1s ease-out';
   }, 6000);
   item2rotate = setInterval(function() {
      item2.classList.toggle('item2-rotate');
      item2.style.transition = '1s ease-out';
   }, 6000);
   item3rotate = setInterval(function() {
      item3.classList.toggle('item3-rotate');
      item3.style.transition = '1s ease-out';
   }, 6000);
   item4rotate = setInterval(function() {
      item4.classList.toggle('item4-rotate');
      item4.style.transition = '1s ease-out';
   }, 6000);
});

item3.addEventListener('mouseover', function() {
   icon3.style.backgroundColor = '#fff';
   icon3.style.transition = '.5s ease-out';
   item3Title1.style.color = '#fff';
   item3Title1.style.transition = '.5s ease-out';
   item3Title2.style.color = '#fff';
   item3Title2.style.transition = '.5s ease-out';
   clearInterval(item1rotate);
   clearInterval(item2rotate);
   clearInterval(item3rotate);
   clearInterval(item4rotate);
});

item3.addEventListener('mouseout', function() {
   icon3.style.backgroundColor = null;
   item3Title1.style.color = null;
   item3Title2.style.color = null;
   item1rotate = setInterval(function() {
      item1.classList.toggle('item1-rotate');
      item1.style.transition = '1s ease-out';
   }, 6000);
   item2rotate = setInterval(function() {
      item2.classList.toggle('item2-rotate');
      item2.style.transition = '1s ease-out';
   }, 6000);
   item3rotate = setInterval(function() {
      item3.classList.toggle('item3-rotate');
      item4.style.transition = '1s ease-out';
   }, 6000);
   item4rotate = setInterval(function() {
      item4.classList.toggle('item4-rotate');
      item4.style.transition = '1s ease-out';
   }, 6000);
});

item4.addEventListener('mouseover', function() {
   icon4.style.backgroundColor = '#fff';
   icon4.style.transition = '.5s ease-out';
   item4Title1.style.color = '#fff';
   item4Title1.style.transition = '.5s ease-out';
   item4Title2.style.color = '#fff';
   item4Title2.style.transition = '.5s ease-out';
   clearInterval(item1rotate);
   clearInterval(item2rotate);
   clearInterval(item3rotate);
   clearInterval(item4rotate);
});

item4.addEventListener('mouseout', function() {
   icon4.style.backgroundColor = null;
   item4Title1.style.color = null;
   item4Title2.style.color = null;
   item1rotate = setInterval(function() {
      item1.classList.toggle('item1-rotate');
      item1.style.transition = '1s ease-out';
   }, 6000);
   item2rotate = setInterval(function() {
      item2.classList.toggle('item2-rotate');
      item2.style.transition = '1s ease-out';
   }, 6000);
   item3rotate = setInterval(function() {
      item3.classList.toggle('item3-rotate');
      item3.style.transition = '1s ease-out';
   }, 6000);
   item4rotate = setInterval(function() {
      item4.classList.toggle('item4-rotate');
      item4.style.transition = '1s ease-out';
   }, 6000);
});

let location1 = document.querySelector('.location1');
let rome = document.querySelector('#rome');
let zoom = document.querySelector('.zoom');
let zoomicon = document.querySelector('.zoom img');
let location1zoom = document.querySelector('.location1-zoom');
let zoomhidden = document.querySelector('.zoom-hidden');
let imagecontainer1 = document.querySelector('.location1-image-container');

zoom.addEventListener('mouseover', function() {
   zoom.style.backgroundColor = '#fff';
   zoomicon.src = 'images/zoom2.svg';
});

zoom.addEventListener('click', function() {
    location1zoom.style.transform = 'scale(1)';
    imagecontainer1.style.cursor = 'zoom-out';
});

zoomhidden.addEventListener('click', function() {
   location1zoom.removeAttribute('style');
   imagecontainer1.removeAttribute('style');
});

zoom.addEventListener('mouseout', function() {
   zoom.style.backgroundColor = null;
   zoomicon.src = 'images/zoom1.svg';
});

location1.addEventListener('mouseover', function() {
   rome.style.opacity = '1';
   zoom.style.opacity = '1';
});

location1.addEventListener('mouseout', function() {
   rome.style.opacity = '0';
   zoom.style.opacity = '0';
});

imagecontainer1.addEventListener('click', function() {
   location1zoom.removeAttribute('style');
   imagecontainer1.removeAttribute('style');
});

let location2 = document.querySelector('.location2');
let florence = document.querySelector('#florence');
let zoom2 = document.querySelector('.zoom2');
let zoomicon2 = document.querySelector('.zoom2 img');
let location2zoom = document.querySelector('.location2-zoom');
let zoom2hidden = document.querySelector('.zoom2-hidden');
let imagecontainer2 = document.querySelector('.location2-image-container');

location2.addEventListener('mouseover', function() {
   florence.style.opacity = '1';
   zoom2.style.opacity = '1';
});

location2.addEventListener('mouseout', function() {
   florence.style.opacity = '0';
   zoom2.style.opacity = '0';
});

zoom2.addEventListener('click', function() {
   location2zoom.style.transform = 'scale(1)';
   imagecontainer2.style.cursor = 'zoom-out';
});

zoom2hidden.addEventListener('click', function() {
   location2zoom.removeAttribute('style');
   imagecontainer2.removeAttribute('style');
});

zoom2.addEventListener('mouseover', function() {
   zoom2.style.backgroundColor = '#fff';
   zoomicon2.src = 'images/zoom2.svg';
});

zoom2.addEventListener('mouseout', function() {
   zoom2.style.backgroundColor = null;
   zoomicon2.src = 'images/zoom1.svg';
});

imagecontainer2.addEventListener('click', function() {
   location2zoom.removeAttribute('style');
   imagecontainer2.removeAttribute('style');
});

let location3 = document.querySelector('.location3');
let venecia = document.querySelector('#venecia');
let zoom3 = document.querySelector('.zoom3');
let zoomicon3 = document.querySelector('.zoom3 img');
let location3zoom = document.querySelector('.location3-zoom');
let zoom3hidden = document.querySelector('.zoom3-hidden');
let imagecontainer3 = document.querySelector('.location3-image-container');


location3.addEventListener('mouseover', function() {
   venecia.style.opacity = '1';
   zoom3.style.opacity = '1';
});

location3.addEventListener('mouseout', function() {
   venecia.style.opacity = '0';
   zoom3.style.opacity = '0';
});

zoom3.addEventListener('click', function() {
   location3zoom.style.transform = 'scale(1)';
   imagecontainer3.style.cursor = 'zoom-out';
});

zoom3hidden.addEventListener('click', function() {
   location3zoom.removeAttribute('style');
   imagecontainer3.removeAttribute('style');
});

zoom3.addEventListener('mouseover', function() {
   zoom3.style.backgroundColor = '#fff';
   zoomicon3.src = 'images/zoom2.svg';
});

zoom3.addEventListener('mouseout', function() {
   zoom3.style.backgroundColor = null;
   zoomicon3.src = 'images/zoom1.svg';
});

imagecontainer3.addEventListener('click', function() {
   location3zoom.removeAttribute('style');
   imagecontainer3.removeAttribute('style');
});

let location4 = document.querySelector('.location4');
let milan = document.querySelector('#milan');
let zoom4 = document.querySelector('.zoom4');
let zoomicon4 = document.querySelector('.zoom4 img');
let location4zoom = document.querySelector('.location4-zoom');
let zoom4hidden = document.querySelector('.zoom4-hidden');
let imagecontainer4 = document.querySelector('.location4-image-container');


location4.addEventListener('mouseover', function() {
   milan.style.opacity = '1';
   zoom4.style.opacity = '1';
});

location4.addEventListener('mouseout', function() {
   milan.style.opacity = '0';
   zoom4.style.opacity = '0';
});

zoom4.addEventListener('click', function() {
   location4zoom.style.transform = 'scale(1)';
   imagecontainer4.style.cursor = 'zoom-out';
});

zoom4hidden.addEventListener('click', function() {
   location4zoom.removeAttribute('style');
   imagecontainer4.removeAttribute('style');
});

zoom4.addEventListener('mouseover', function() {
   zoom4.style.backgroundColor = '#fff';
   zoomicon4.src = 'images/zoom2.svg';
});

zoom4.addEventListener('mouseout', function() {
   zoom4.style.backgroundColor = null;
   zoomicon4.src = 'images/zoom1.svg';
});

imagecontainer4.addEventListener('click', function() {
   location4zoom.removeAttribute('style');
   imagecontainer4.removeAttribute('style');
});

let location5 = document.querySelector('.location5');
let napoli = document.querySelector('#napoli');
let zoom5 = document.querySelector('.zoom5');
let zoomicon5 = document.querySelector('.zoom5 img');
let location5zoom = document.querySelector('.location5-zoom');
let zoom5hidden = document.querySelector('.zoom5-hidden');
let imagecontainer5 = document.querySelector('.location5-image-container');


location5.addEventListener('mouseover', function() {
   napoli.style.opacity = '1';
   zoom5.style.opacity = '1';
});

location5.addEventListener('mouseout', function() {
   napoli.style.opacity = '0';
   zoom5.style.opacity = '0';
});

zoom5.addEventListener('click', function() {
   location5zoom.style.transform = 'scale(1)';
   imagecontainer5.style.cursor = 'zoom-out';
});

zoom5hidden.addEventListener('click', function() {
   location5zoom.removeAttribute('style');
   imagecontainer5.removeAttribute('style');
});

zoom5.addEventListener('mouseover', function() {
   zoom5.style.backgroundColor = '#fff';
   zoomicon5.src = 'images/zoom2.svg';
});

zoom5.addEventListener('mouseout', function() {
   zoom5.style.backgroundColor = null;
   zoomicon5.src = 'images/zoom1.svg';
});

imagecontainer5.addEventListener('click', function() {
   location5zoom.removeAttribute('style');
   imagecontainer5.removeAttribute('style');
});

let location6 = document.querySelector('.location6');
let tuscany = document.querySelector('#tuscany');
let zoom6 = document.querySelector('.zoom6');
let zoomicon6 = document.querySelector('.zoom6 img');
let location6zoom = document.querySelector('.location6-zoom');
let zoom6hidden = document.querySelector('.zoom6-hidden');
let imagecontainer6 = document.querySelector('.location6-image-container');

location6.addEventListener('mouseover', function() {
   tuscany.style.opacity = '1';
   zoom6.style.opacity = '1';
});

location6.addEventListener('mouseout', function() {
   tuscany.style.opacity = '0';
   zoom6.style.opacity = '0';
});

zoom6.addEventListener('click', function() {
   location6zoom.style.transform = 'scale(1)';
   imagecontainer6.style.cursor = 'zoom-out';
});

zoom6hidden.addEventListener('click', function() {
   location6zoom.removeAttribute('style');
   imagecontainer6.removeAttribute('style');
});

zoom6.addEventListener('mouseover', function() {
   zoom6.style.backgroundColor = '#fff';
   zoomicon6.src = 'images/zoom2.svg';
});

zoom6.addEventListener('mouseout', function() {
   zoom6.style.backgroundColor = null;
   zoomicon6.src = 'images/zoom1.svg';
});

imagecontainer6.addEventListener('click', function() {
   location6zoom.removeAttribute('style');
   imagecontainer6.removeAttribute('style');
});

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

let options5 = {
   threshold: 0.1
}

let show1 = function(entries) {
   entries.forEach(entry => {
       let{target, isIntersecting} = entry;

       if(isIntersecting) {
         target.style.opacity = '1'
       }
   });
}

let observer5 = new IntersectionObserver(show1, options5);
let benefits = document.querySelector('.benefits');
observer5.observe(benefits);

let options6 = {
   threshold: 1
}

let show2 = function(entries) {
   entries.forEach(entry => {
        let{target, isIntersecting} = entry;

        if(isIntersecting) {
            target.style.opacity = '1';
        }
   });
}

let observer6 = new IntersectionObserver(show2, options6);
let bentitle = document.querySelector('.ben-title h1');
observer6.observe(bentitle);

let options7 = {
   threshold: 0.3
}

let show3 = function(entries) {
   entries.forEach(entry => {
      let{target, isIntersecting} = entry;

      if(isIntersecting) {
         target.style.opacity = '1';
      }
   });
}

let observer7 = new IntersectionObserver(show3, options7);
let benitems = document.querySelectorAll('#items');
benitems.forEach(items => {
   observer7.observe(items);
});

let options8 = {
   threshold: 1
}

let show4 = function(entries) {
   entries.forEach(entry => {
       let{target, isIntersecting} = entry;

       if(isIntersecting) {
         target.style.opacity = '1';
       }
   });
}

let observer8 = new IntersectionObserver(show4, options8);
let galleryitem1 = document.querySelector('.gallery-item1');
observer8.observe(galleryitem1);

let options9 = {
   threshold: 0.3
}

let show5 = function(entries) {
   entries.forEach(entry => {
       let{target, isIntersecting} = entry

       if(isIntersecting) {
         target.style.opacity = '1';
       }
   });
}

let observer9 = new IntersectionObserver(show5, options9);
let locations = document.querySelectorAll('#location');
locations.forEach(items => {
   observer9.observe(items);
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

let options12 = {
   threshold: 1
}

let show8 = function(entries) {
    entries.forEach(entry => {
      let{target, isIntersecting} = entry;

      if(isIntersecting) {
         target.style.opacity = '1';
      }
    });
}

let observer12 = new IntersectionObserver(show8, options12);
let placeitems = document.querySelectorAll('#place-items');
placeitems.forEach(items => {
   observer12.observe(items);
});

let options13 = {
   threshold: 0.3
}

let show9 = function(entries) {
   entries.forEach(entry => {
      let{target, isIntersecting} = entry;

      if(isIntersecting) {
         target.style.opacity = '1';
      }
   });
}

let observer13 = new IntersectionObserver(show9, options13);
let places = document.querySelectorAll('#places');
places.forEach(items => {
   observer13.observe(items);
});

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

let options16 = {
   threshold: 1
}

let show12 = function(entries) {
   entries.forEach(entry => {
      let{target,isIntersecting} = entry;

      if(isIntersecting) {
         target.style.opacity = '1';
      }
   });
}

let observer16 = new IntersectionObserver(show12, options16);
let contactItems = document.querySelectorAll('[data-item="contact-item"]');
contactItems.forEach(items => {
   observer16.observe(items);
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