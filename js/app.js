





import { lerp } from "./utils.js";
import { createProjects, createBlogposts } from "./projects.js";

const main = document.querySelector('main');
const video = document.querySelector('video');
const videoSection = document.querySelector('#video');

createProjects();
createBlogposts();

main.addEventListener('scroll', () => {
    animateVideo()
})

// Video

const headerLeft = document.querySelector('.text-header-left');
const headerRight = document.querySelector('.text-header-right');

function animateVideo(){
    let {bottom} = videoSection.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005);
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale;
    video.style.transform = `scale(${scale})`;

    // Text transformation
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    headerLeft.style.transform = `translateX(${-textTrans}px)`;
    headerRight.style.transform = `translateX(${textTrans}px)`;
} 

// Projects

const projectsSticky = document.querySelector('.projects-sticky');
const projectSlider = document.querySelector('.projects-slider');

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300,
    large: 100
}

let limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

function setLimit(){
    limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large
}

window.addEventListener('resize', setLimit);

function animateProjects(){
    let offsetTop = projectsSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0 , 0)`;
}

// Post animation
const blogSection = document.getElementById('blog');
const blogPosts = [...document.querySelectorAll('.post')];

function scrollBlogPosts(){
    let blogSectionTop = blogSection.getBoundingClientRect().top;
    for(let i = 0; i < blogPosts.length; i++){
        if(blogPosts[i].parentElement.getBoundingClientRect().top <= 1){
            // +1 to account for the first BLOG title div
        
            let offset = (blogSectionTop + (window.innerHeight * (i + 1))) * .0005;
            offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
            if( i == 1) console.log(offset)
            blogPosts[i].style.transform = `scale(${1 + offset})`
        }
    }
}

// Circle animation
const circleSection = document.getElementById('circle-section');
const circle = document.querySelector('.circle');

function scrollCircle(){
    let {top} = circleSection.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight)
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    if(top <= 0){
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }else{
        circle.style.transform = `translate(-50%, -50%) scale(${0})`;
    }
}

// Dicover text animation
const dContainer = document.querySelector('.discover-container')
const leftText = document.querySelector('.text-left');
const rightText = document.querySelector('.text-right');

function scrollDiscover(){
    let {bottom} = dContainer.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans
    leftText.style.transform = `translateX(${-textTrans}px)`
    rightText.style.transform = `translateX(${textTrans}px)`
}


// Text reveal

const textReveals = [...document.querySelectorAll('.text-reveal')];

let callback = (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry);
            [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
                setTimeout(() => {
                    span.style.transform = `translateY(0)`;
                }, (idx+1) * 50)
            })
        }
    })
})

let options = {
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

textReveals.forEach(text => {
    let string = text.innerText;
    let html = '';
    for(let i = 0; i < string.length; i++){
        html += `<span>${string[i]}</span>`;
    }
    text.innerHTML = html
    observer.observe(text);
})


function animate(){
    animateProjects();
    requestAnimationFrame(animate)
}

main.addEventListener('scroll', () => {
    scrollBlogPosts();
    scrollCircle();
    scrollDiscover()
})

animate()




// Header animation        


document.addEventListener("DOMContentLoaded", function(){
    let tl = gsap.timeline({paused: true});
    
    tl.to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon (0 0,100% 0, 100% 100%, 0 100%)",
        ease: "power2.out",
    });
    
    tl.from(
        ".menu-link, .btn",{
            opacity: 0,
            y: 60,
            stagger: 0.05,
            duration: 0.75,
            ease: "power1.inOut",
        },
        "<",
    );
    
    tl.to (
        ".video-preview",
        {
            duration: 1,
            height: "200px",
            ease: "power2.out",
        },
        "<",
    );
    
    tl.to (
        ".menu-divider", {
            duration: 2,
            width: "100%",
            ease: "power4.out"
        },
        "<",
    );
    
    function openMenu() {
        document.querySelector(".menu-overlay").style.visibility = "visible";
        document.querySelector("nav").style.display= "none";
        tl.seek(0); // Reset the timeline to its initial state
        
        tl.play();
       
    }
    
    function closeMenu() {
        document.querySelector("nav").style.display = "flex";
       
        tl.reverse ();
        document.querySelector(".menu-overlay").style.visibility = "hidden";
        
        
        
        
    }
    



    


    
    document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
    document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);
    document.querySelectorAll(".menu-link").forEach(function(link) {
        link.addEventListener("click", closeMenu);
    });
    
    
});


//cursor


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){

    const posX = e.clientX;
    const posY= e.clientY;

    cursorDot.style.left =`${posX}px`;
    cursorDot.style.top =`${posY}px`;

    // cursorOutline.style.left =`${posX}px`;
    // cursorOutline.style.top =`${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    },
    {duration: 500, fill: "forwards"})

})

document.addEventListener("DOMContentLoaded", function () {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]"); 
    const links = document.querySelectorAll("a");
  
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursorDot.style.transform = "scale(5.5) translate(-8%, -8%)";
          cursorOutline.style.visibility = "hidden";   
      });
      
      link.addEventListener("mouseleave", () => {
        cursorDot.style.transform = "scale(1) translate(-50%, -50%)";
        cursorOutline.style.visibility = "visible"; 
        
      });
    });
  
  });
  
  function updateLiveTime() {
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedTime = now.toLocaleString('en-US', options);
    document.getElementById('liveTime').textContent = formattedTime;
  }

  // Update time every second
  setInterval(updateLiveTime, 1000);

  // Initial call to display time
  updateLiveTime();


  



