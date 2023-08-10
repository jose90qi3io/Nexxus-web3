import React from 'react'
import '../Styles/Footer.css'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Footer = () => {
  return (
    <div>
          <div className="cuerpo3">
        <div className="cuerpoTexto">
            <div className="eslogan">
            <AnimationOnScroll  animateIn="animate__fadeInUp">
            <p>Con el software</p>
            <p>correcto, ocurren</p>
            <p>grandes cosas</p>
            </AnimationOnScroll>
          </div>
           
          <div className="esloganTexto">
          <AnimationOnScroll  animateIn="animate__slideInUp">
            <p>
              En la era digital actual, las herramientas adecuadas pueden ser el
              catalizador para transformar ideas en innovaciones y visiones en
              victorias. No se trata solo de codificar, sino de conectar:
              conectar equipos, conectar objetivos y conectar posibilidades.
              Cuando eliges el software adecuado, no solo estás eligiendo una
              solución tecnológica, sino un futuro más brillante y eficiente.
            </p>
            </AnimationOnScroll>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Footer
