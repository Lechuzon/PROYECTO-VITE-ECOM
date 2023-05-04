import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import Container from "../../components/Container"

const RefundPloicy = () => {
  return (
    <>
      <Meta title={"Politica de reembolso"} />
      <BreadCrumb title="Politica de reembolso" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
              Ofrecemos reembolso y/o cambio dentro de los primeros 30 días de tu compra. Si han transcurrido 30 días desde tu compra, no se te ofrecerá un reembolso y/o cambio de ningún tipo.
              <br />
              <b>Cambios</b>
              <br />
Solo reemplazamos los artículos si están defectuosos o dañados. Si necesitas cambiarlo por el mismo artículo, envíanos un email a malltechstore@gmail.com y envía tu artículo.
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default RefundPloicy