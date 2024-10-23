import './style.css'
import LinkTree from '../../molecules/linkTree';
const Profile = () => {
    return( 
        <div className="prf-background">
            <div className='prf-backgroundimageMask'/>
            
            <div className='perfil'>
                <div className='prf-head'><h3>Julian Paris</h3></div>

                <div className='prf-backImage'>
                    <img className='profileImage' src='perfil.png'/>
                </div>
                <div className='profileTitles'>
                    <div className='devtitle'><h5>Web developer</h5></div>
                    <div className='devtitle'><h5>Game developer</h5></div>
                    <div className='devtitle'><h5>Media Artist</h5></div>
                </div>

                <div className='prf-foot'><h4>FULLSTACK</h4></div>
            </div>
            <div className='prf-content'>
                <div className='txtblc textBlock_00'>
                    <h3>Mi historia</h3>
                    <p>
                    Todo comenzó en la secundaria, cuando la curiosidad por saber cómo se hacían los videojuegos me llevó a navegar por internet y crear mi primer juego con recursos descargados. Desde entonces, me dediqué a aprender cada aspecto del desarrollo de videojuegos. Empecé dominando áreas como el 3D, gracias a cursos en Udemy y la UNLP, y también desarrollé habilidades en dibujo, ilustración y escultura en el Bachillerato de Bellas Artes.
                    </p>
                    <p>
                    Mi viaje autodidacta me llevó a programar por mi cuenta y a estudiar un año en la Facultad de Informática de la UNLP. Además, obtuve una beca en Digital House para especializarme en desarrollo web, donde perfeccioné mis habilidades en frontend, diseño de interfaces y creación de APIs básicas.
                    </p>
                </div>
                <div className='txtblc textBlock_01'>
                    <h3>Experiencia</h3>
                    <p>
                    A lo largo de mi camino, colaboré con múltiples equipos freelancers, aprendiendo y abarcando más áreas, a pesar de que algunos proyectos no se completaron. Probé varios motores gráficos y finalmente me encontré más cómodo trabajando con Unreal.
                    </p>
                    <p>
                    Mi enfoque autodidacta y mi insaciable sed de aprender y crear me han llevado a donde estoy hoy. Este portafolio es una muestra de mi dedicación, mi pasión por los videojuegos y el desarrollo multidisciplinario.
                    </p>
                </div>
                <LinkTree/>
            </div>
            <div className='prf-light-container'>
                <div className='prf-light'/>
            </div>
        </div>
    )
}

export default Profile;