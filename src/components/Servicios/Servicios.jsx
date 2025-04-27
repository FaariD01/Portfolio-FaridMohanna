import "./Servicios.css"

const Servicios = () => {
  return (
    <>
      
      <div id="Services" className="services">

        <h2 className="titleService">MIS SERVICIOS</h2>

        <div className="webDev">
            <div className="imgYtitle">
                <img src="../../public/webdev.png"/>
                <h3>Desarrollo Web</h3>
            </div>
            <p>Creacion de sitios web, responsivos y personalizados, segun en los gustos y las necesidades del cliente</p>
        </div>
        <div id="ecommerceDev" className="webDev">
        <div className="imgYtitle">

            <img src="../../public/ecomDev.png"/>
            <h3>Desarrollo Ecommerce</h3>
        </div>
            <p>Creacion de Ecommerce responsivos y personalizados, segun los gustos y necesidades del cliente </p>
        </div>
      </div>
    </>
  )
}

export default Servicios
