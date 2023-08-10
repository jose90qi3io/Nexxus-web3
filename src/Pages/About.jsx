import React from 'react'
import Navbar from '../Components/Navbar'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LOGO from '../img/LOGO.png'
import '../Styles/About.css'
import mision from '../img/10.png'
import vision from '../img/11.png'
import objetivo from '../img/9.png'
import Footer from '../Components/Footer';

const About = () => {
  return (
    <div className='stylesGeneral'>
      <Navbar/>
      <div className="encabezado">
        <div className="encabezadoPortada">
          <div className="encabezaPortadaTitulos">
            <div className="encabezaPortadaTitulo">
              <p>Nosotros</p>
              <hr />
            </div>
            <div className="encabezaPortadaSubtitulo">
              <p>
              En Nexxus, somos líderes en soluciones ERP empresariales, comprometidos con optimizar y simplificar tus procesos de negocio. Nuestro equipo experto personaliza cada sistema para satisfacer las necesidades únicas de cada cliente. Ya sea una PYME o una gran corporación, contamos con la experiencia y pasión necesarias para elevar tu gestión empresarial. En SysERP, no solo somos proveedores; somos tus socios estratégicos. Descubre la diferencia SysERP.
              </p>
            </div>
 

            <div className="encabezaPortadaPie">
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Eficiencia y Protección.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Adaptabilidad y Alcance.</p>
              </div>
              <div className="encabezaPortadaPieIconos">
                <img src="" alt="" />
                <p>Trabajo Unificado.</p>
              </div>
            </div>
            
          </div>
                 <img src={LOGO} alt="" id='logo'/>        
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
                <p id="TituloAb">Mision</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn= "animate__zoomIn">
                <p className="textos-j">
                Proporcionar soluciones tecnológicas innovadoras y de alta
                  calidad que satisfagan las necesidades de nuestros clientes.
                  Desarrollar y mantener software confiable, seguro y fácil de
                  usar, que mejore la eficiencia y productividad de las empresas
                  y contribuya a su crecimiento y éxito a largo plazo.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn">
              <div id="img-Ab">
                <img src={mision} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>

         


            <div className="Mision">
              <div>
              <AnimationOnScroll animateIn= "animate__zoomIn"> 
                <p id="TituloAb">Visión</p>
                </AnimationOnScroll>
                
            <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p className="textos-j">
                Brindamos servicios de impacto positivo en la sociedad,
                  respaldados por nuestra inquebrantable eficiencia,
                  confiabilidad y funcionalidad. Nuestro objetivo es ser líderes
                  en el desarrollo de soluciones tecnológicas innovadoras y de
                  primera calidad. Nos esforzamos por estar siempre a la
                  vanguardia.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn"> 
              <div id="img-Ab">
                <img src={vision} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>



        

            <div className="Mision">
              <div>
              <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p id="TituloAb">Objetivos</p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn= "animate__zoomIn">  
                <p className="textos-j">
                Proporcionar soluciones tecnológicas innovadoras y de alta
                  calidad que satisfagan las necesidades de nuestros clientes.
                  Desarrollar y mantener software confiable, seguro y fácil de
                  usar, que mejore la eficiencia y productividad de las empresas
                  y contribuya a su crecimiento y éxito a largo plazo.
                </p>
                </AnimationOnScroll>
              </div>
              <AnimationOnScroll animateIn= "animate__zoomIn">  
              <div id="img-Ab">
                <img src={objetivo} alt="" id="Mis" />
              </div>
              </AnimationOnScroll>
            </div>
          </div>

        </div>
      </div>
    {/*   <Footer/> */}

    </div>
  )
}

export default About
