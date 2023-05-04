import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import Container from "../../components/Container"

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Politica de privacidad"} />
      <BreadCrumb title="Politica de privacidad" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
              

En Mall Tech Store todos los días trabajamos duro para servirte cada vez mejor cuando adquieres los productos que se comercializan o utilizas los servicios disponibles en el sitio web o aplicaciones móviles. Cuidar tus datos personales que nos compartes es una parte fundamental de esto. Por ello, queremos que conozcas cómo los usamos para ofrecerte una mejor y más personalizada experiencia de cliente y cómo los protegemos.

El responsable por tus datos personales es Mall Tech Store, RUC 63598754345, con domicilio en la Avenida Santa Isabel 861, Piso 5, Miraflores, Lima Perú.

Si tienes alguna duda, por favor contáctanos al correo electrónico datos.personales@malltechstore.com.
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default PrivacyPolicy