import "./style.css"
const AboutThis = () => {

    return(
        <div className="abt-background">
            <div className="abt-content">
                <h2 className="abt-title">Bienvenidos a mi portafolio digital</h2>
                <p className="abt-text">
                    Aquí combino todas mis habilidades en videojuegos, desarrollo, arte y diseño en un solo lugar. Este proyecto representa mi primera incursión en la creación de resultados pulidos en todas las áreas en las que trabajo, un esfuerzo por mostrar mi capacidad multidisciplinaria. Aunque en mi día a día me dedico principalmente a la creación de prototipos, este portafolio es una ventana a lo que puedo lograr cuando me enfoco en la perfección.
                </p>
            </div>
            <div className="bottomLight"/>
            <div className="smokeContainer">
                <img className="smk smoke_00" src="smoke.png"/>
                <img className="smk smoke_01" src="smoke.png"/>
            </div>
        </div>
    )
}

export default AboutThis