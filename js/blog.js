










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