import Menu from "./Card"
import Opciones from "./Carrusel"
import entrada from './img/entrada.jpg'
import platoprincipal from './img/platoprincipal.jpg'
import postre from './img/postre.jpg'
import bebidas from './img/bebidas.jpg'


const home = [
  {
    id: 1,
    title: 'Entrada',
    image: entrada
  },
  {
    id: 2,
    title: 'Plato Principal',
    image: platoprincipal
  },
  {
    id: 3,
    title: 'Postre',
    image: postre
  },
  {
    id: 4,
    title: 'Bebidas',
    image: bebidas
  },
]


const Home = () => {

  return (
    <div>
      <Opciones></Opciones>
      <div className="container">
        <div className="row">
          {
            home.map((home) => (
              <div key={home.id} className="col-md-5">
                <Menu title= {home.title} imageSource={home.image}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home

