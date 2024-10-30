import React from "react";
import "./ModuleNosotros.css";
import Mapa from "../Mapa/Mapa";
import Logo2 from '../../assets/imgLogo/Logo2.png'
import Img1 from '../../../public/assets/img-nosotros/image1.jpg'
import Img2 from '../../../public/assets/img-nosotros/image2.jpg'

function ModuleNostros() {
  return (
    <div className="moduleNosotrosContainer">
      <div className="containerTitulo">
        <h1>Supermercados Rojas</h1>
      </div><br />
      <div className="containerNosotrosDesc">
        <h3><marquee direction="right">Nosotros</marquee></h3>
        <p className="PMd">
          Somos una cadena de mini supermercados ubicadas en la ciudad de 
          ICA fundadas en 1990 por nuestro fundador Raúl Rojas tito. ROJAS 
          MARKET en su inicio empezó sus operaciones con inventarios bajos 
          con un promedio de 2000 ítems, contando con tan solo 5 trabajadores 
          para atender a sus clientes y una caja registradora para realizar las 
          ventas. En la actualidad cuadruplico las referencias de sus productos 
          llegando a manejar más de 8,000 ítems y más de 10 cajas registradoras, 
          además cuenta con más de 100 trabajadores, a quienes les denomina 
          “COLABORADORES”, en sus tres locales en el centro de ICA, en la Calle 
          Castrovirreyna 251, en la calle Juan Pablo Fernandini 290 Urbanización 
          Luren y en Av. La Angostura L-1 - Residencial La Angostura. Actualmente
          está consolidado como líder del sector con un 30% de participación de
            mercado.El valor fundamental de Rojas Market es “EL CLIENTE ES NUESTRA 
            RAZON DE SER”, y en este valor basa su cultura organizacional.
        </p>
      </div>
      <div className="imagen-container">
        <img src={Logo2} alt="Logo" className="img-content"/>
      </div>
      
      <div className="SedesContainer">
        <div className="mision">
          <div className="imagen-2-container">
            <img src={Img1} alt="Mision" className="img-content-2"/>
          </div>
          <div className="mision-desc">
            <h3>Mision</h3>
            <p className="PMd">
              Ser líder en la comercialización de productos de consumo,
              satisfaciendo las necesidades de sus clientes por encima de sus
              expectativas, brindándoles productos de calidad y con excelencia en el
              servicio, teniendo como objetivo el crecimiento sostenido de la
              empresa y el desarrollo profesional de sus colaboradores.
            </p>
          </div>
        </div>
        <div className="vision">
          <div className="vision-desc">
            <h3>Vision</h3>
            <p className="PMd">
              Ser la cadena de supermercados que consolida el desarrollo armónico de
              nuestros equipos de trabajo con nuestros clientes, la comunidad y
              su medio ambiente.
            </p>
          </div>
          <div className="imagen-2-container">
            <img src={Img2} alt="Vision" className="img-content-2"/>
          </div>
        </div>
        <div className="sede-container">
          <h3>Sede Pricipal</h3>
          <p className="PMd">CA. JUAN PABLO FERNANDINI Nª 290 URB. LUREN</p>
          <Mapa/>
        </div>
        
      </div>
    </div>
  );
}

export default ModuleNostros;
