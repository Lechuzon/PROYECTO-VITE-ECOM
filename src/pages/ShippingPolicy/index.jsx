import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import Container from "../../components/Container"


const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Politica de envíos"} />
      <BreadCrumb title="Politica de envíos" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                En Mall Tech Store ofrecemos el envio y la devolucion de nuestros pedidos a traves de operadores logisticos.
                Para ello disponemos de 2 modalidades de entrega:<br />
                <b>-Entrega en domicilio</b>  <br />
                  La empresa de transporte entregara el paquete en tu casa o en la direccion que nos indiques. El transportista hará varios intentos de entrega,por lo general en dias laborables consecutivos.
                  <br />
                <b>-Entrega en un punto de recogida</b>  <br />
                Si por motivos de horario te resulta dificil estar en casa para recibir el pedido, puedes solicitar que se entregue en un lugar de la ciudad donde vives.

              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default ShippingPolicy