     
//  SCROLL SUAVE

window.onload = () => {
    let links = document.querySelectorAll('a')
    
    console.log(links);

    let primero = links[0]
    primero.addEventListener('click', () => {
      scrollSuave('#Home', 500, 81)
    })
  
    let segundo = links[1]
    segundo.addEventListener('click', () => {
      scrollSuave('#SectionAboutMe', 500, 80)
    })
  
    let tercero = links[2]
    tercero.addEventListener('click', () => {
      scrollSuave('#Proyects', 500, 20)
    })
    let cuarto = links[3]
    cuarto.addEventListener('click', () => {
      scrollSuave('#Services', 500, 20)
    })
    let quinto = links[4]
    quinto.addEventListener('click', () => {
      scrollSuave('#Contact', 500, 10)
    })
    let sexto = links[5]
    sexto.addEventListener('click', () => {
      scrollSuave('#Home', 500, 10)
    })
    let septimo = links[6]
    septimo.addEventListener('click', () => {
      scrollSuave('#SectionAboutMe', 500, 10)
    })
    let octavo = links[7]
    octavo.addEventListener('click', () => {
      scrollSuave('#Proyects', 500, 10)
    })
    let noveno = links[8]
    noveno.addEventListener('click', () => {
      scrollSuave('#Services', 500, 10)
    })
    let decimo = links[9]
    decimo.addEventListener('click', () => {
      scrollSuave('#Contact', 500, 10)
    })
    let decimop = links[10]
    decimop.addEventListener('click', () => {
      scrollSuave('#Home', 500, 10)
    })
    let decimoS = links[11]
    decimoS.addEventListener('click', () => {
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

  //MENU HAMBURGUESA
  
  let svghamburguer = document.getElementById("svghamburguer");
  let ulList = document.getElementById("ulList");

  svghamburguer.addEventListener("click", (e) =>{
      let src = e.target.getAttribute("src");
      if (src == "./img/menu.svg") {
          e.target.setAttribute("src", "./img/close.svg");
        }else {
          e.target.setAttribute("src", "./img/menu.svg");
      }
    ulList.classList.toggle("ulItem")
  })


  ulList.addEventListener("click", () => {
    ulList.classList.toggle("ulItem")
    svghamburguer.src = "./img/menu.svg";
  })