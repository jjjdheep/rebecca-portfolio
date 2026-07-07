// Fade in headings when scrolling

const elements = document.querySelectorAll(".section h2, .timeline-section h2");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.2

});


elements.forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});


// Small parallax effect

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.pageX)/50;
const y = (window.innerHeight/2 - e.pageY)/50;

document.querySelector(".hero").style.transform =
`translate(${x}px, ${y}px)`;

});


/* -----------------------
FLIP CARDS
----------------------- */

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => {

            if(c !== card){

                c.classList.remove("flipped");

            }

        });

        card.classList.toggle("flipped");

    });

});