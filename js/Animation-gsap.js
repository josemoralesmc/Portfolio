

// Animacion Home

var tl = gsap.timeline({repeat: 0}) 
tl.to("#LetraDiv", {
    duration: 1,
    rotateZ: 0,
})

tl.to("#Letra", {
    duration: 1,
    x: 0,
    textShadow: "#69C9D0 0rem 0rem",
    delay: -1

})

tl.to("#LetraDiv", {
    duration: 0.5,
    rotateZ:-30,
})

tl.to("#Letra", {
    duration: 1,
    textShadow: "#69C9D0 1rem 0rem",
})
tl.to("#Letra", {
    duration: 0.1,
    textShadow: "#69C9D0 10rem 0rem",
})

tl.to("#Letra", {
    duration: 0.1,
    textShadow: "#69C9D0 1rem 0rem",
})
tl.to("#LetraDiv", {
    duration: 0.5,
    rotateZ: -20,
})

gsap.to("#svg_5", {
    duration: 0.5,
    y: 3,
    yoyo:true,
     repeat:-1
})
gsap.to("#svg_6", {
    duration: 0.5,
    y: 3,
    yoyo:true,
     repeat:-1
})

//Animacion skills

let icon1 = document.querySelector(".icon1")
let icon2 = document.querySelector(".icon2")
let icon3 = document.querySelector(".icon3")
let icon4 = document.querySelector(".icon4")
let icon5 = document.querySelector(".icon5")
let icon6 = document.querySelector(".icon6")
let icon7 = document.querySelector(".icon7")
let icon8 = document.querySelector(".icon8")
let icon9 = document.querySelector(".icon9")
let icon10 = document.querySelector(".icon10")



    var tl2 = gsap.timeline({repeat: -1, paused: true,   })
    tl2.to(".icon1", {
         ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl2.to(".icon1", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    })
    

    var tl3 = gsap.timeline({ repeat: -1, paused: true })
    tl3.to(".icon2", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl3.to(".icon2", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl4 = gsap.timeline({ repeat: -1, paused: true })
    tl4.to(".icon3", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl4.to(".icon3", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl5 = gsap.timeline({ repeat: -1, paused: true })
    tl5.to(".icon4", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl5.to(".icon4", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl6 = gsap.timeline({ repeat: -1, paused: true })
    tl6.to(".icon5", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl6.to(".icon5", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl7 = gsap.timeline({ repeat: -1, paused: true })
    tl7.to(".icon6", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl7.to(".icon6", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl8 = gsap.timeline({ repeat: -1, paused: true })
    tl8.to(".icon7", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl8.to(".icon7", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl9 = gsap.timeline({ repeat: -1, paused: true })
    tl9.to(".icon8", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl9.to(".icon8", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl10 = gsap.timeline({ repeat: -1, paused: true })
    tl10.to(".icon9", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl10.to(".icon9", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    var tl11 = gsap.timeline({ repeat: -1, paused: true })
    tl11.to(".icon10", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1.2,
        scaleY: 1.2,
        delay: -0.1
    })
    tl11.to(".icon10", {
        ease: "circ.out",
        duration: .5,
        scaleX: 1,
        scaleY: 1,
        delay: -0.1
    });
    

    icon1.onmouseover = () => tl2.play();
    icon1.onmouseleave = () => tl2.pause();
    icon2.onmouseover = () => tl3.play();
    icon2.onmouseleave = () => tl3.pause();
    icon3.onmouseover = () => tl4.play();
    icon3.onmouseleave = () => tl4.pause();
    icon4.onmouseover = () => tl5.play();
    icon4.onmouseleave = () => tl5.pause();
    icon5.onmouseover = () => tl6.play();
    icon5.onmouseleave = () => tl6.pause();
    icon6.onmouseover = () => tl7.play();
    icon6.onmouseleave = () => tl7.pause();
    icon7.onmouseover = () => tl8.play();
    icon7.onmouseleave = () => tl8.pause();
    icon8.onmouseover = () => tl9.play();
    icon8.onmouseleave = () => tl9.pause();
    icon9.onmouseover = () => tl10.play();
    icon9.onmouseleave = () => tl10.pause();
    icon10.onmouseover = () => tl11.play();
    icon10.onmouseleave = () => tl11.pause();



    window.onload = () => {
        let links = document.querySelectorAll('a')
        
        console.log(links);

        let primero = links[0]
        primero.addEventListener('click', () => {
          scrollSuave('#Home', 500, 81)
        })
      
        let segundo = links[1]
        segundo.addEventListener('click', () => {
          scrollSuave('#SectionAboutMe', 500, 10)
        })
      
        let tercero = links[2]
        tercero.addEventListener('click', () => {
          scrollSuave('#Proyects', 500, 10)
        })
        let cuarto = links[3]
        cuarto.addEventListener('click', () => {
          scrollSuave('#Services', 500, 10)
        })
        let quinto = links[4]
        quinto.addEventListener('click', () => {
          scrollSuave('#Contact', 500, 10)
        })
        let sexto = links[5]
        sexto.addEventListener('click', () => {
          scrollSuave('#Contact', 500, 10)
        })
        let septimo = links[6]
        septimo.addEventListener('click', () => {
          scrollSuave('#SectionAboutMe', 500, 10)
        })
      }
      
      
      const scrollSuave = (objetivo, duracion, compensacion) => {
        let elemObj = document.querySelector(objetivo)
        let elemPos = elemObj.getBoundingClientRect().top - compensacion
        let posInicial = window.pageYOffset
        let tiempoInicial = null
      
        const animacion = tiempoAhora => {
          if (tiempoInicial === null) tiempoInicial = tiempoAhora
          tiempoPasado = tiempoAhora - tiempoInicial
          let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
          window.scrollTo(0, auxAnimacion)
          if (tiempoPasado < duracion) requestAnimationFrame(animacion)
        }
        requestAnimationFrame(animacion)
      }
      
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return - c / 2 * (t * (t - 2) - 1) + b
      }