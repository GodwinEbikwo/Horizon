//header
const header = document.querySelector("#header");

//content
const heroImg = document.querySelector(".hero__image");
const h1Line = document.querySelector(".hero__text h1");
const contentP = document.querySelector(".hero__text p");
const contentB = document.querySelector(".hero__text a");

//features
const fcT = document.querySelector(".features__content h3");
const fcP = document.querySelector(".features__content p");
const fcB = document.querySelector(".features__content .btn-row");

const fL = document.querySelectorAll(".features__list li");

//articles
const articleTitle = document.querySelector("#aT");
const articleCard = document.querySelector(".article__grid");

const heroTl = gsap.timeline();

heroTl
  .from(header, {
    y: -32,
    opacity: 0,
    duration: 1.2,
    ease: "power3.inOut",
  })
  .from(heroImg, {
    delay: -0.4,
    opacity: 0,
    x: 15,
    skewX: 3,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from([h1Line, contentP, contentB], {
    delay: -0.6,
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  });

const featuresTL = gsap.timeline();
featuresTL
  .from([fcT, fcP, fcB], {
    delay: -0.6,
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })
  .from(fL, {
    delay: -0.8,
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    stagger: {
      amount: 0.4,
    },
  });

// const articlesTL = gsap.timeline();
// articlesTL
//   .from(articleTitle, {
//     // delay: -0.6,
//     opacity: 0,
//     y: 40,
//     duration: 1,
//     ease: "power3.out",
//   })
//   .from(articleCard, {
//     delay: -0.6,
//     opacity: 0,
//     y: 40,
//     duration: 1,
//     ease: "power3.out",
//     stagger: {
//       amount: 0.4,
//     },
//   });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#aniID",
  triggerHook: 0,
  reverse: false,
})

  .setTween(featuresTL)
  .addTo(controller);
