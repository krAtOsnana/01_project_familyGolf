gsap.to("#navi",{
  
   backgroundColor :"#000",
    height:"120px",
    duration:"0.5",
    scrollTrigger:{
       // triggeer:"#navi",
        scroller:"body",
        markers:true,
        scrub:1,
        start:"top -10",
        end:"top -11%"
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        markers:true,
        scrub:true,
        start:"top -30%",
        end:"top -80%"
    }
}
)
 
