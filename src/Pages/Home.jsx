import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTypewriter } from 'react-simple-typewriter'
import "animate.css/animate.min.css";
import Navbar from "../Components/Navbar";
import "../Styles/Styles.css";
import "../Styles/Home.css";
import "../Styles/Cards.css"
import imgenEncabezado from "../img/2.png";
import imgenListado1 from "../img/3.png";
import imgenListado2 from "../img/4.png";
import imgenListado3 from "../img/5.png";
import imgenCard1 from "../img/7.png";
import imgenCard2 from "../img/6.png";
import Footer from "../Components/Footer";

const Home = () => {

    const [text] = useTypewriter({
        words: ['Innova...', 'Integra...', 'Implementa...', 'Interactúa...'],loop:0})

  return (
    <div className="stylesGeneral">
      <Navbar />
      <div className="encabezado">
        <div className="encabezadoPortada">
          <div className="encabezaPortadaTitulos">
            <div className="encabezaPortadaTitulo">
              <p>{text}</p>
            </div>
            <div className="encabezaPortadaSubtitulo">
              <p>
                Nexxus ofrece una forma eficaz y potente de gestionar sus
                proyectos
              </p>
            </div>
 

            <div className="encabezaPortadaPie">
              <div className="encabezaPortadaPieIconos">
                <img src={imgenListado1} alt="" />
                <p>Eficiencia y Protección.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src={imgenListado2} alt="" />
                <p>Adaptabilidad y Alcance.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src={imgenListado3} alt="" />
                <p>Trabajo Unificado.</p>
              </div>
            </div>
            
          </div>
                 <img src={imgenEncabezado} alt="" />        
        </div>
      </div>
      <div className="cuerpo">
        <div className="cuerpoTexto">
            <div className="eslogan">
            <AnimationOnScroll  animateIn="animate__fadeInUp">
            <p>La clave del exito</p>
            <p>empieza con un</p>
            <p>inventario inteligente</p>
            </AnimationOnScroll>
          </div>
           
          <div className="esloganTexto">
          <AnimationOnScroll  animateIn="animate__fadeInUp">
            <p>
              En la era digital actual, las herramientas adecuadas pueden ser el
              catalizador para transformar ideas en innovaciones y visiones en
              victorias. No se trata solo de codificar, sino de conectar:
              equipos, conectar objetivos y conectar posibilidades.
              Cuando eliges el software adecuado, no solo estás eligiendo una
              solución tecnológica, sino un futuro más brillante y eficiente.
            </p>
            </AnimationOnScroll>
          </div>
        
        </div>
      </div>
<br />
<br />
<br />
      <div className="cuerpo2">
        <div className="cuerpoTexto">

        <div className="alin-g">
            <div className="Mision">
              <div>
              <AnimationOnScroll animateIn= "animate__zoomIn"> 
                <p id="TituloAb">Códigos coherentes</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn= "animate__zoomIn">
                <p className="textos-j">
                En el corazón de cada aplicación exitosa yace un código limpio y estructurado. Nuestro compromiso con la coherencia asegura que cada línea de código esté optimizada para el rendimiento, facilitando la escalabilidad y mantenimiento a largo plazo. No dejamos espacio para errores al ofrecer soluciones programadas con precisión y eficiencia.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn">
              <div id="img-Ab">
                <img src={imgenCard1} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>

         


            <div className="Mision">
              <div>
              <AnimationOnScroll animateIn= "animate__zoomIn"> 
                <p id="TituloAb">Desarrollo completo</p>
                </AnimationOnScroll>
                
            <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p className="textos-j">
                Nuestra filosofía va más allá de simplemente entregar un producto; buscamos ofrecer soluciones que abarquen desde la concepción inicial de una idea hasta su implementación y lanzamiento en el mercado. Al adoptar un enfoque holístico, aseguramos que cada componente, desde la interfaz del usuario hasta la base de datos, esté perfectamente alineado con tus objetivos empresariales.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn"> 
              <div id="img-Ab">
                <img src={imgenCard1} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>



        

            <div className="Mision">
              <div>
              <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p id="TituloAb">Soporte total al usuario</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p className="textos-j">
                Entendemos que el desarrollo de software no termina con la entrega del producto. Por eso, nuestro equipo de soporte está listo y disponible para asistirte en cualquier eventualidad o consulta que puedas tener. Ya sea una actualización, una adaptación o una duda simple, siempre estaremos a tu lado para garantizar una experiencia de usuario ininterrumpida.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn">  
              <div id="img-Ab">
                <img src={imgenCard2} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>
          </div>

        </div>
      </div>
      <br />
<br />
<br />

{/*   <Footer/> */}
    </div>
  );
};

export default Home;
