let menu = document.querySelector(".menu-page");
let logos = document.querySelector(".logos");
let menuContainer = document.querySelector(".menu-items-container")
let breakfast = document.querySelector("#breakfast");
let mains = document.querySelector("#mains");
let boards = document.querySelector("#boards");
let drinks = document.querySelector("#drinks");
let U1 = document.querySelector(".underline1");
let U2 = document.querySelector(".underline2");
let U3 = document.querySelector(".underline3");
let U4 = document.querySelector(".underline4");
let open1 = 0;

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
gsap.from(".page4 #head", {
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
    <a href="./adventure.html" class="links"><h2 class="topic2">Golf Lessons</h2></a>
    <a href="./adventure.html" class="links"><h2 class="topic3">Adventure Golf</h2></a>
    <a href="./cafe.html" class="links"><h2 class="topic4">Café</h2></a>
    <a href="./events.html" class="links"><h2 class="topic5">Events</h2></a>
  </div>`;
        logos.innerHTML = `<svg class="web-logo web-logo-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 516.434 534.384"><defs><clipPath id="closemenu"><path fill="#fff" d="M544 144h512v414H544Z"></path></clipPath></defs><g clip-path="url(#closemenu)" transform="translate(-542.726 -144)"><path fill="#fff" d="M893.3 146.514a23.983 23.983 0 0 1 34.7 21.5v208a26.925 26.925 0 0 1-.3 4 25.949 25.949 0 0 1 .3 4v92.8c76.5 16.6 128 47.7 128 83.2 0 53-114.6 96-256 96s-256-43-256-96 114.6-96 256-96a657.8 657.8 0 0 1 80 4.8v-78l-194.7-97.4a24.028 24.028 0 0 1 0-43l208-104ZM768 560.014c0 17.7 28.7 32 64 32s64-14.3 64-32-28.7-32-64-32-64 14.3-64 32Z"></path></g><path fill="#039c3d" d="M170.229 132.385a6 6 0 0 1 0-10.769l157.4-77.365a6 6 0 0 1 8.645 5.384v154.73a6 6 0 0 1-8.647 5.385Z"></path><path fill="#fff" d="M58.11 534.384c20.413 0 36.505-7.45 46.786-20.86l-22.2-19.817c-6.109 7.748-13.41 12.218-22.8 12.218-14.6 0-24.436-10.132-24.436-26.075s9.834-26.075 24.436-26.075c9.387 0 16.688 4.47 22.8 12.218l22.2-19.817c-10.281-13.41-26.373-20.86-46.786-20.86-33.525 0-58.11 22.5-58.11 54.534s24.585 54.534 58.11 54.534ZM115.028 532h82.251v-27.267h-47.087V427.7h-35.164Zm145.126 2.384c33.972 0 58.855-22.946 58.855-54.534s-24.883-54.534-58.855-54.534-58.855 22.946-58.855 54.534 24.88 54.534 58.855 54.534Zm0-28.459c-12.963 0-23.393-9.834-23.393-26.075s10.43-26.075 23.393-26.075 23.393 9.834 23.393 26.075-10.43 26.075-23.393 26.075Zm110.558 28.459c32.333 0 48.574-16.092 48.574-35.164 0-38.442-57.663-28.012-57.663-40.528 0-3.576 3.278-6.556 13.559-6.556 9.089 0 18.774 2.533 29.055 7.748l10.579-25.484c-10.877-6.109-25.33-9.089-39.336-9.089-32.333 0-48.574 15.794-48.574 35.164 0 38.889 57.663 28.31 57.663 41.422 0 3.576-3.576 5.662-13.559 5.662a71.557 71.557 0 0 1-34.419-9.536l-11.324 25.633c10.43 6.407 28.012 10.728 45.445 10.728Zm93.572-28.906V491.77h44.1v-25.33h-44.1v-12.218h50.213V427.7h-84.781V532h86.718v-26.522Z"></path></svg>`;
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

breakfast.addEventListener("click", function () {
    U1.style.margin = "0 125px";
    menuContainer.innerHTML = `<div class="menu-items menu-items-1">
    <section class="meals">
        <h2>Breakfasts</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>ENGLISH BREAKFAST BAGUETTE</h4>
                <h6>£7.25</h6>
            </div>
            <div class="item-price">
                <h4>VEGGIE BREAKFAST BAGUETTE</h4>
                <h6>£7.25</h6>
            </div>
            <div class="item-price">
                <h4>BACON BAGUETTE</h4>
                <h6>£5.00</h6>
            </div>
            <div class="item-price">
                <h4>SAUSAGE BAGUETTE</h4>
                <h6>£5.00</h6>
            </div>
        </div>
        <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/04/cafe-menu-breakfast-1024x576.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt="">
    </section>
</div>`;
    gsap.to(".underline2,.underline3,.underline4", {
        margin: "0 197px",
    })
    setTimeout(function () {
        U1.style.visibility = "visible";
    }, 100)
    setTimeout(function () {
        U2.style.visibility = "hidden";
    }, 440)
    setTimeout(function () {
        U3.style.visibility = "hidden";
    }, 470)
    setTimeout(function () {
        U4.style.visibility = "hidden";
    }, 400)
    gsap.from(".underline1", {
        margin: "0 250px"
    })
    gsap.to("#breakfast", {
        color: "#94C11E"
    })
    gsap.to("#mains, #boards, #drinks", {
        color: "white"
    })
    gsap.from(".menu-items-1", {
        scale: 0.88,
    })
    gsap.to(".menu-items-2, .menu-items-3, .menu-items-4", {
        scale: 0.88,
        opacity: 0,
    })
    gsap.from(".meals", {
        opacity: 0,
        duration: 1
    })
})

mains.addEventListener("click", function () {
    U2.style.margin = "0 155px";
    menuContainer.innerHTML = `<div class="menu-items menu-items-2">
    <section class="meals">
        <h2>BAGUETTES & WRAPS</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>FISH GOUJON WRAP</h4>
                <h6>£8.75</h6>
            </div>
            <div class="item-price">
                <h4>HALLOUMI WRAP</h4>
                <h6>£8.50</h6>
            </div>
            <div class="item-price">
                <h4>SOUTHERN FRIED CHICKEN WRAP</h4>
                <h6>£8.50</h6>
            </div>
            <div class="item-price">
                <h4>CHEESE & HAM BAGUETTE</h4>
                <h6>£6.50</h6>
            </div>
            <div class="item-price">
                <h4>TUNA CRUNCH BAGUETTE</h4>
                <h6>£6.75</h6>
            </div>
            <div class="item-price">
                <h4>CHICKEN MAYO BAGUETTE</h4>
                <h6>£6.50</h6>
            </div>
            <div class="item-price">
                <h4>CHEESE BAGUETTE</h4>
                <h6>£6.00</h6>
            </div>
            <div class="item-price">
                <h4>HAM BAGUETTE</h4>
                <h6>£6.00</h6>
            </div>
            <p>All served with fries and side salad.</p>
        </div>
    </section>
    <section class="meals">
        <h2>Burgers</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>BACON & CHEESEBURGER</h4>
                <h6>£9.50</h6>
            </div>
            <div class="item-price">
                <h4>CHEESEBURGER</h4>
                <h6>£9.00</h6>
            </div>
            <div class="item-price">
                <h4>CLASSIC BURGER</h4>
                <h6>£8.50</h6>
            </div>
            <div class="item-price">
                <h4>MOVING MOUNTAINS VEGAN BURGER</h4>
                <h6>£10.50</h6>
            </div>
            <div class="item-price">
                <h4>SOUTHERN FRIED CHICKEN BURGER</h4>
                <h6>£9.00</h6>
            </div>
            <p>All burgers are served with fries & side salad.</p>
        </div>
    </section>
    <section class="meals">
        <h2>Kids Meals</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>CHICKEN GOUJONS</h4>
                <h6>£6.00</h6>
            </div>
            <div class="item-price">
                <h4>MARGHERITA PIZZA</h4>
                <h6>£6.00</h6>
            </div>
            <div class="item-price">
                <h4>FISH GOUJONS</h4>
                <h6>£6.00</h6>
            </div>
            <p>Choose a drink: water, apple juice or orange juice</p>
        </div>
        <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt="">
    </section>
</div>`;
    gsap.to(".underline1,.underline3,.underline4", {
        margin: "0 197px",
    })
    setTimeout(function () {
        U1.style.visibility = "hidden";
    }, 450)
    setTimeout(function () {
        U2.style.visibility = "visible";
    }, 180)
    setTimeout(function () {
        U3.style.visibility = "hidden";
    }, 470)
    setTimeout(function () {
        U4.style.visibility = "hidden";
    }, 400)
    gsap.from(".underline2", {
        margin: "0 250px"
    })
    gsap.to("#mains", {
        color: "#94C11E"
    })
    gsap.to("#breakfast, #boards, #drinks", {
        color: "white"
    })
    gsap.from(".menu-items-2", {
        scale: 0.88,
    })
    gsap.to(".menu-items-1, .menu-items-3, .menu-items-4", {
        scale: 0.88,
        opacity: 0,
    })
    gsap.from(".meals", {
        opacity: 0,
        duration: 1
    })
})

boards.addEventListener("click", function () {
    U3.style.margin = "0 90px";
    menuContainer.innerHTML = `<div class="menu-items menu-items-3">
    <section class="meals">
        <h2>Sharing plates</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>12 CHICKEN WINGS</h4>
                <h6>£10.00</h6>
            </div>
            <div class="item-price">
                <h4>6 CHICKEN WINGS</h4>
                <h6>£5.50</h6>
            </div>
            <div class="item-price">
                <h4>5 BUTTERMILK CHICKEN STRIPS</h4>
                <h6>£8.00</h6>
            </div>
            <div class="item-price">
                <h4>3 BUTTERMILK CHICKEN STRIPS</h4>
                <h6>£5.00</h6>
            </div>
            <div class="item-price">
                <h4>NACHOS</h4>
                <h6>£8.50</h6>
            </div>
            <div class="item-price">
                <h4>LOADED CHEESY FRIES</h4>
                <h6>£5.50</h6>
            </div>
            <div class="item-price">
                <h4>CHEESY & BACON FRIES</h4>
                <h6>£6.00</h6>
            </div>
            <div class="item-price">
                <h4>JUST FRIES</h4>
                <h6>£4.25</h6>
            </div>
            <div class="item-price">
                <h4>CHEESY GARLIC CIABATTA</h4>
                <h6>£4.00</h6>
            </div>
            <div class="item-price">
                <h4>GARLIC BREAD</h4>
                <h6>£</h6>
            </div>
        </div>
        <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/04/cafe-menu-sharing-cropped.jpg?strip=all&lossy=1&sharp=1&w=1152&ssl=1"
            alt="">
    </section>
</div>`;
    gsap.to(".underline1,.underline2,.underline4", {
        margin: "0 197px",
    })
    setTimeout(function () {
        U1.style.visibility = "hidden";
    }, 450)
    setTimeout(function () {
        U2.style.visibility = "hidden";
    }, 440)
    setTimeout(function () {
        U3.style.visibility = "visible";
    }, 100)
    setTimeout(function () {
        U4.style.visibility = "hidden";
    }, 400)
    gsap.from(".underline3", {
        margin: "0 250px"
    })
    gsap.to("#boards", {
        color: "#94C11E"
    })
    gsap.to("#breakfast, #mains, #drinks", {
        color: "white"
    })
    gsap.from(".menu-items-3", {
        scale: 0.88,
    })
    gsap.to(".menu-items-1, .menu-items-2, .menu-items-4", {
        scale: 0.88,
        opacity: 0,
    })
    gsap.from(".meals", {
        opacity: 0,
        duration: 1
    })
})

drinks.addEventListener("click", function () {
    U4.style.margin = "0 150px";
    menuContainer.innerHTML = `<div class="menu-items menu-items-4">
    <section class="meals">
        <h2>Hot Drinks</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>LATTE</h4>
                <h6>from £2.60</h6>
            </div>
            <div class="item-price">
                <h4>CAPPUCCINO</h4>
                <h6>from £2.60</h6>
            </div>
            <div class="item-price">
                <h4>FLAT WHITE</h4>
                <h6>£2.60</h6>
            </div>
            <div class="item-price">
                <h4>ESPRESSO</h4>
                <h6>from £2.15</h6>
            </div>
            <div class="item-price">
                <h4>AMERICANO</h4>
                <h6>from £2.20</h6>
            </div>
            <div class="item-price">
                <h4>HOT CHOCOLATE</h4>
                <h6>£3.25</h6>
            </div>
            <div class="item-price">
                <h4>HERBAL TEA</h4>
                <h6>£2.00</h6>
            </div>
            <div class="item-price">
                <h4>HERBAL TEA</h4>
                <h6>£1.75</h6>
            </div>
        </div>
    </section>
    <section class="meals">
        <h2>Soft Drinks</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>OASIS</h4>
                <h6>£2.50</h6>
            </div>
            <div class="item-price">
                <h4>COCA COLA</h4>
                <h6>£2.25</h6>
            </div>
            <div class="item-price">
                <h4>DIET COKE</h4>
                <h6>£2.00</h6>
            </div>
            <div class="item-price">
                <h4>SPRITE</h4>
                <h6>£2.25</h6>
            </div>
            <div class="item-price">
                <h4>FANTA</h4>
                <h6>£2.25</h6>
            </div>
            <div class="item-price">
                <h4>SPARKLING WATER</h4>
                <h6>£1.75</h6>
            </div>
            <div class="item-price">
                <h4>STILL WATER</h4>
                <h6>£1.75</h6>
            </div>
            <div class="item-price">
                <h4>SLUSH</h4>
                <h6>£3.25</h6>
            </div>
        </div>
    </section>
    <section class="meals">
        <h2>Beer & Cider</h2>
        <div class="items-container">
            <div class="item-price">
                <h4>HEINEKEN</h4>
                <h6>£6.00</h6>
            </div>
            <div class="item-price">
                <h4>FOSTERS 4%</h4>
                <h6>£4.75</h6>
            </div>
            <div class="item-price">
                <h4>STRONGBOW 4.5%</h4>
                <h6>£4.75</h6>
            </div>
        </div>
        <img src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/04/cafe-menu-drinks-1024x683.jpg?strip=all&lossy=1&sharp=1&ssl=1"
            alt="">
    </section>
</div>`;
    gsap.to(".underline1,.underline2,.underline3", {
        margin: "0 197px",
    })
    setTimeout(function () {
        U1.style.visibility = "hidden";
    }, 400)
    setTimeout(function () {
        U2.style.visibility = "hidden";
    }, 440)
    setTimeout(function () {
        U3.style.visibility = "hidden";
    }, 470)
    setTimeout(function () {
        U4.style.visibility = "visible";
    }, 100)
    gsap.from(".underline4", {
        margin: "0 250px"
    })
    gsap.to("#drinks", {
        color: "#94C11E"
    })
    gsap.to("#breakfast, #mains, #boards", {
        color: "white"
    })
    gsap.from(".menu-items-4", {
        scale: 0.88,
    })
    gsap.to(".menu-items-1, .menu-items-2, .menu-items-3", {
        scale: 0.88,
        opacity: 0,
    })
    gsap.from(".meals", {
        opacity: 0,
        duration: 1
    })
})