import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import Container from "../../components/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Terminos & Condiciones"} />
      <BreadCrumb title="Terminos & Condiciones" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
              
Aqui describimos los “Términos y Condiciones” generales. Cualquier persona que desee acceder y/o suscribirse, para poder usar el Sitio o los Servicios podrá hacerlo sujetándose a los Términos y Condiciones Generales y las Políticas de Privacidad, junto con todas las demás políticas y principios que rigen Mall Tech Store y que son incorporados al presente directamente o por referencia o que son explicados y/o detallados en otras secciones del Sitio. En consecuencia, todas las visitas y todos los contratos y transacciones que se realicen en este Sitio, así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidos a la legislación aplicable en Perú.
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default TermAndContions