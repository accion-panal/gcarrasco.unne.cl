import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/mePhoto.jpg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover object-top rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">               
              Empresa dedicada con seriedad 
              y confiabilidad a la búsqueda de compradores, vendedores y arrendadores ideales 
              para satisfacer las expectativas de nuestros clientes. Nos enfocamos en ustedes, 
              nuestros clientes, generando un ambiente de confianza que les permite abordar 
              todas sus dudas e inquietudes relacionadas con la venta, compra o arriendo de 
              sus inmuebles. Nos esforzamos por garantizar que sus propiedades estén en 
              óptimas condiciones para la gestión, asegurando así una experiencia fluida 
              y exitosa en todo el proceso.
              <br />
              <br />
              Nuestro objetivo es la satisfacción del cliente, nos comprometemos a 
              proporcionar un servicio de calidad que supere sus expectativas. 
              Estamos aquí para acompañarlos en cada paso del camino, ofreciendo soluciones 
              efectivas y brindando la tranquilidad necesaria para que puedan alcanzar sus 
              objetivos inmobiliarios con confianza y tranquilidad. Confíe en nosotros para hacer realidad sus 
              sueños de venta, compra o arriendo de propiedades con profesionalismo y dedicación.
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Gloria Pilar Carrasco Quijada.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundadora de CQ Inmobiliaria y Corredor de Propiedades.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
