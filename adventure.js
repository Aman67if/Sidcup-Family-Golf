let menu = document.querySelector(".menu-page");
let logos = document.querySelector(".logos");
let open1 = 0;
let Question1 = document.querySelector(".page4 .option-1");
let Question2 = document.querySelector(".page4 .option-2");
let Question3 = document.querySelector(".page4 .option-3");
let Question4 = document.querySelector(".page4 .option-4");
let expand1 = 0;
let expand2 = 0;
let expand3 = 0;
let expand4 = 0;

gsap.to(".nav", {
  height: "11vh",
  paddingTop: "14px",
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -5%",
    end: "top -9%",
    scrub: 1
  }
})
gsap.from(".page5 #head", {
  y: 30,
  scrollTrigger: {
    trigger: "#head",
    scroller: "body",
    end: "top 90%",
    scrub: 1
  }
})

logos.addEventListener("click", function () {
  if (open1 == 0) {
    menu.innerHTML = `<div class="menu-section-open">
    <a href="./index.html" class="links"><h2 class="topic1">Toptracer Range</h2></a>
    <a href="./lesson.html" class="links"><h2 class="topic2">Golf Lessons</h2></a>
    <a href="./adventure.html" class="links"><h2 class="topic3">Adventure Golf</h2></a>
    <a href="./cafe.html" class="links"><h2 class="topic4">Café</h2></a>
    <a href="./events.html" class="links"><h2 class="topic5">Events</h2></a>
  </div>`;
    logos.innerHTML = `<svg class="web-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.434 534.384"><defs><clipPath id="closemenu"><path fill="#fff" d="M544 144h512v414H544Z"></path></clipPath></defs><g clip-path="url(#closemenu)" transform="translate(-542.726 -144)"><path fill="#fff" d="M893.3 146.514a23.983 23.983 0 0 1 34.7 21.5v208a26.925 26.925 0 0 1-.3 4 25.949 25.949 0 0 1 .3 4v92.8c76.5 16.6 128 47.7 128 83.2 0 53-114.6 96-256 96s-256-43-256-96 114.6-96 256-96a657.8 657.8 0 0 1 80 4.8v-78l-194.7-97.4a24.028 24.028 0 0 1 0-43l208-104ZM768 560.014c0 17.7 28.7 32 64 32s64-14.3 64-32-28.7-32-64-32-64 14.3-64 32Z"></path></g><path fill="#039c3d" d="M170.229 132.385a6 6 0 0 1 0-10.769l157.4-77.365a6 6 0 0 1 8.645 5.384v154.73a6 6 0 0 1-8.647 5.385Z"></path><path fill="#fff" d="M58.11 534.384c20.413 0 36.505-7.45 46.786-20.86l-22.2-19.817c-6.109 7.748-13.41 12.218-22.8 12.218-14.6 0-24.436-10.132-24.436-26.075s9.834-26.075 24.436-26.075c9.387 0 16.688 4.47 22.8 12.218l22.2-19.817c-10.281-13.41-26.373-20.86-46.786-20.86-33.525 0-58.11 22.5-58.11 54.534s24.585 54.534 58.11 54.534ZM115.028 532h82.251v-27.267h-47.087V427.7h-35.164Zm145.126 2.384c33.972 0 58.855-22.946 58.855-54.534s-24.883-54.534-58.855-54.534-58.855 22.946-58.855 54.534 24.88 54.534 58.855 54.534Zm0-28.459c-12.963 0-23.393-9.834-23.393-26.075s10.43-26.075 23.393-26.075 23.393 9.834 23.393 26.075-10.43 26.075-23.393 26.075Zm110.558 28.459c32.333 0 48.574-16.092 48.574-35.164 0-38.442-57.663-28.012-57.663-40.528 0-3.576 3.278-6.556 13.559-6.556 9.089 0 18.774 2.533 29.055 7.748l10.579-25.484c-10.877-6.109-25.33-9.089-39.336-9.089-32.333 0-48.574 15.794-48.574 35.164 0 38.889 57.663 28.31 57.663 41.422 0 3.576-3.576 5.662-13.559 5.662a71.557 71.557 0 0 1-34.419-9.536l-11.324 25.633c10.43 6.407 28.012 10.728 45.445 10.728Zm93.572-28.906V491.77h44.1v-25.33h-44.1v-12.218h50.213V427.7h-84.781V532h86.718v-26.522Z"></path></svg>`;
    gsap.from(".menu-section-open", {
      opacity: 0.5
    })
    gsap.from(".menu-section-open h2", {
      y: 80,
      opacity: 0,
      stagger: 0.1
    })
    open1 = 1;
  } else {
    open1 = 0;
    logos.innerHTML = `<svg class="web-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.655 543.64">
  <defs>
    <clipPath id="openmenu">
      <path fill="#fff" d="M544 144h512v414H544z"></path>
    </clipPath>
  </defs>
  <path fill="#fff"
    d="m138.6 541-.33-115.5h-32.01l-36.63 61.545L32.01 425.5H0V541h35.475v-50.82l25.08 40.42h17.16l25.08-42.24.33 52.64Zm57.095-29.37v-15.18h48.84V468.4h-48.84v-13.53h55.6V425.5H157.41V541h96.03v-29.37Zm148.66-86.13v52.47l-43.89-52.47h-32.01V541h37.95v-52.47l43.89 52.47h32.01V425.5Zm112.04 118.14c35.475 0 56.265-19.965 56.265-54.615V425.5h-38.285v62.37c0 17.655-6.765 24.255-17.655 24.255s-17.655-6.6-17.655-24.255V425.5h-38.94v63.525c0 34.65 20.79 54.615 56.27 54.615Z">
  </path>
  <g clip-path="url(#openmenu)" transform="translate(-543.405 -144)">
    <path fill="#fff"
      d="M893.3 146.514a23.983 23.983 0 0 1 34.7 21.5v208a26.932 26.932 0 0 1-.3 4 25.955 25.955 0 0 1 .3 4v92.8c76.5 16.6 128 47.7 128 83.2 0 53-114.6 96-256 96s-256-43-256-96 114.6-96 256-96a657.784 657.784 0 0 1 80 4.8v-78l-194.7-97.4a24.028 24.028 0 0 1 0-43l208-104ZM768 560.014c0 17.7 28.7 32 64 32s64-14.3 64-32-28.7-32-64-32-64 14.3-64 32Z">
    </path>
  </g>
  <path fill="#91b508"
    d="M169.55 132.385a6 6 0 0 1 0-10.769l157.4-77.365a6 6 0 0 1 8.645 5.384v154.73a6 6 0 0 1-8.647 5.385Z">
  </path>
</svg>`;
    gsap.to(".menu-section-open", {
      opacity: 0
    })
    gsap.to(".menu-section-open h2", {
      y: 30,
      opacity: 0,
    })
    setTimeout(() => {
      menu.innerHTML = "";
    }, 350);
  }
})


Question1.addEventListener("click", function () {
  if (expand1 == 0) {
    gsap.to(".page4 .option-1", {
      height: "30vh",
    })
    gsap.to(".option-1 h2", {
      color: "#93C11D"
    })
    gsap.to(".option-1 i", {
      rotate: "180deg"
    })
    expand1 = 1;
  } else {
    gsap.to(".page4 .option-1", {
      height: "11.2vh"
    })
    gsap.to(".option-1 h2", {
      color: "white"
    })
    gsap.to(".option-1 i", {
      rotate: "0"
    })
    expand1 = 0;
  }
})
Question2.addEventListener("click", function () {
  if (expand2 == 0) {
    gsap.to(".page4 .option-2", {
      height: "24vh"
    })
    gsap.to(".option-2 h2", {
      color: "#93C11D"
    })
    gsap.to(".option-2 i", {
      rotate: "180deg"
    })
    expand2 = 1;
  } else {
    gsap.to(".page4 .option-2", {
      height: "11.2vh"
    })
    gsap.to(".option-2 h2", {
      color: "white"
    })
    gsap.to(".option-2 i", {
      rotate: "0"
    })
    expand2 = 0;
  }
})
Question3.addEventListener("click", function () {
  if (expand3 == 0) {
    gsap.to(".page4 .option-3", {
      height: "28vh",
    })
    gsap.to(".option-3 h2", {
      color: "#93C11D"
    })
    gsap.to(".option-3 i", {
      rotate: "180deg"
    })
    expand3 = 1;
  } else {
    gsap.to(".page4 .option-3", {
      height: "11.2vh"
    })
    gsap.to(".option-3 h2", {
      color: "white"
    })
    gsap.to(".option-3 i", {
      rotate: "0"
    })
    expand3 = 0;
  }
})
Question4.addEventListener("click", function () {
  if (expand4 == 0) {
    gsap.to(".page4 .option-4", {
      height: "22vh"
    })
    gsap.to(".option-4 h2", {
      color: "#93C11D"
    })
    gsap.to(".option-4 i", {
      rotate: "180deg"
    })
    expand4 = 1;
  } else {
    gsap.to(".page4 .option-4", {
      height: "11.2vh"
    })
    gsap.to(".option-4 h2", {
      color: "white"
    })
    gsap.to(".option-4 i", {
      rotate: "0"
    })
    expand4 = 0;
  }
})