
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

const loadingPageAnimation = ()=>{
  
    tl.from('.parent .child span',{
    
        x: '50%',
        duration:1,
        delay:0.5,
        opacity:0,
        stragger:2,
        ease: Expo.easeInOut
    })
    
    tl.to('.parent .child',{
        
        y: '-100%',
        duration:1,
        
        ease: Expo.easeInOut
    })
    
    
    tl.to('.div1', {
        height: 0,
        duration: 2,
        delay:-1,
        ease: Expo.easeInOut
    
    })
    
    tl.to('.div2', {
        height: '100%',
        duration: 2,
        delay: -2,
        ease: Expo.easeInOut
    
    })
    tl.to('.div3', {
        height: '100%',
        duration: 2,
        delay: -1.7,
        ease: Expo.easeInOut
    
    })
    tl.to('.navbar', {
        
        duration: 1,
        delay: -0.6,
        // ease: Expo.easeInOut,
        opacity:1
    
    })
    tl.to('.aboutmediv',{
        display:'flex',
        duration:0,
        delay:-0.8
    })
    tl.to('.skills-section',{
        display:"flex",
        duration:0,
        delay:-0.8,

    })
    tl.to('.experience-section',{
        display:"flex",
        duration:0,
        delay:-0.8
    })
    tl.to('.contact-section',{
        display:"flex",
        duration:0,
        delay:-0.8
    })
    tl.to('.education-section',{
        display:"flex",
        opacity:1,
        duration:1,
        delay:-0.8
    })
    
    
    tl.from('.creative h3 span',{
        y:50,
        duration:0.6
    })
    tl.from('.creative h4 span',{
        y:50,
        duration:0.6,
        delay:0.1
    })


    tl.to('.imgcontainer',{
    rotate:8,
    // duration:,
    scrollTrigger:{
        trigger:".aboutmediv",
        // markers:true,
        scrub:1,
        rotate:10,
        start:"top 80%",
        end:"bottom 20%"

    }

    }) 



    
}



const revealFunction =()=>{

    const reveal = document.querySelectorAll('.reveal').forEach((e)=>{


        let parent = document.createElement('span')
        let child = document.createElement('span')
    
        child.classList.add('child')
        parent.classList.add('parent')
    
        child.innerHTML = e.innerHTML
        parent.appendChild(child)
    
    
        e.innerHTML = ''
        e.appendChild(parent)
    
    
    })
}

revealFunction()

loadingPageAnimation()


const setCurrenttime =()=>{
    const currentHours = document.getElementById("hour")
    const currentmin = document.getElementById("minute")
    
    setInterval(()=>{
        const currentTime = new Date
        currentHours.innerHTML =        currentHours.innerHTML = (currentTime.getHours()<10 ? "0":"")+currentTime.getHours()

        currentmin.innerHTML = (currentTime.getMinutes()<10 ? "0":"")+currentTime.getMinutes()


    },1000)
}



setCurrenttime()





const setPercentageAnimation =()=>{

    tl.to("#skills",{
        scrollTrigger:{
            trigger:".skills",
            // markers:true,
            
        }
    })

tl.to('.skills:nth-child(1) .skillPercent',{
    background: "conic-gradient( #462167 0% 100% , transparent 50% 100% )",
    duration:1,
    ease:Expo.easeInOut,
   
})
tl.to('.skills:nth-child(2) .skillPercent',{
    background: "conic-gradient( #462167 0% 80% , transparent 50% 100% )",
    duration:1,
    ease:Expo.easeInOut

    
})
tl.to('.skills:nth-child(3) .skillPercent',{
    background: "conic-gradient( #462167 0% 80% , transparent 50% 100% )",
    duration:1,
    ease:Expo.easeInOut

})
tl.to('.skills:nth-child(4) .skillPercent',{
    background: "conic-gradient( #462167 0% 85% , transparent 50% 100% )",
    duration:1,
    ease:Expo.easeInOut

})
// tl.to('.skills:nth-child(5) .skillPercent',{
//     background: "conic-gradient( #462167 0% 100% , transparent 50% 100% )",
//     duration:1,
// })



}



setPercentageAnimation()


const floatingExperience =()=>{
    tl.to('#container1',{
        x:10,
        y:15,
        duration:2,
        repeat:-1,
        yoyo:true

    })
    tl.to('#container2',{
        x:-10,
        y:25,
        duration:1,
        delay:-1,
        repeat:-1,
        yoyo:true

    })
    tl.to('#container3',{
        x:20,
        y:-15,
        duration:3,
        delay:-1,
        repeat:-1,
        yoyo:true

    })
}

floatingExperience()



