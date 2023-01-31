import { Image } from "react-bootstrap";
import imagenAndressa from '../Imagenes/Andressa.jpg';
import imagenEmanuel from '../Imagenes/Emmanuel.jpeg';
import imagenMariana from '../Imagenes/Mariana.jpeg';
import imagenEnzo from '../Imagenes/Enzo.jpeg';
import imagenVeronica from "../Imagenes/Veronica.jpg"
import imagenEsteban from "../Imagenes/Esteban.jpeg"

const SobreNos = () => {
    return (
            <><div>
            <Image src= {imagenAndressa} />
            <div>
                <h3>Andressa Arcocha</h3>
            </div>
        </div><div>
                <Image src= {imagenEmanuel}/>
                <div>
                    <h3>Emanuel Rizza</h3>
                </div>
            </div>
            <div>
                <Image src= {imagenVeronica}/>
                <div>
                    <h3>Veronica Menichetti</h3>
                </div>
            </div><div>
                <Image src= {imagenEnzo}/>
                <div>
                    <h3>Enzo Lobo</h3>
                </div>
            </div>
            <div>
                <Image src= {imagenEsteban}/>
                <div>
                    <h3>Esteban Orrego</h3>
                </div>
            </div><div>
                <Image src= {imagenMariana}/>
                <div>
                    <h3>Mariana Reid</h3>
                </div>
            </div></>
    )
}

export default SobreNos
