var crsr= document.querySelector("#cursor")
var blurr= document.querySelector("#blurr")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x + "px";
    crsr.style.top=dets.y + "px";
    blurr.style.left=dets.x -250 + "px";
    blurr.style.top=dets.y -250 + "px";
})
gsap.to("#navi",{
  
   backgroundColor :"#000",
    height:"80px",
    duration:"0.5",
    scrollTrigger:{
       // triggeer:"#navi",
        scroller:"body",
        //markers:true,
        scrub:1,
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
 
