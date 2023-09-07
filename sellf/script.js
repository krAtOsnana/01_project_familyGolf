var crsr= document.querySelector("#cursor")
var blurr= document.querySelector("#blurr")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+15 + "px";
    crsr.style.top=dets.y + "px";
    blurr.style.left=dets.x -250 + "px";
    blurr.style.top=dets.y -250 + "px";
})

var h4all=document.querySelectorAll("#navi h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})


gsap.to("#navi",{
  
   backgroundColor :"#000",
    height:"80px",
    duration:"0.5",
    scrollTrigger:{
       // triggeer:"#navi",
        scroller:"body",
        //markers:true,
        scrub:3,
        start:"top -60",
        end:"top -11%"
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        scrub:true,
        start:"top -30%",
        end:"top -80%"
    }
}
)
 
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:4,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:5

    }
})
gsap.to("#colon1",{
    y:45,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.to("#colon2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from(".card",{
    opacity:0,
    scale:0.8,    
    stagger:0.3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2

    }

})