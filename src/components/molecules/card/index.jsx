import CardTitle from '../../atoms/cardTitle';
import CardSubtitle from '../../atoms/cardSubtitle';
import CardContent from '../../atoms/cardContent';

import './style.css';

const web = () => {
    return (
        <div className='cd-web-content'>
            <div>
                <h3 className='cd-web-title'>Diseños destacados</h3>
                <ul className='cd-web-ul'>
                    <li className='cd-web-li'><a href='https://www.figma.com/proto/fagVcg7PsBy75k9b8woK07/Untitled?node-id=1-2&node-type=frame&t=yDWdLXxC9djUtwJ9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank'>Zero Game Studio</a></li>
                    <li className='cd-web-li'><a href='https://www.figma.com/proto/UAbighnMjfHM5MOWw93RdD/Ardenas?node-id=2-2&starting-point-node-id=2%3A2&t=Hk3nexujz075FZ39-1' target='_blank'>Ardenas Airsoft</a></li>
                    <li className='cd-web-li'><a href='https://www.figma.com/proto/qyxWQrQQGzXVHYLOMDJwNP/Zero?node-id=30-134&node-type=canvas&t=iL6u8zXBA1R4oxn3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank'>Zero Game Center</a></li>
                    <li className='cd-web-li'><a href='https://www.figma.com/proto/4cpCs2KLQnzS2SE2tFz0Bd/pokedex?node-id=2-2&node-type=canvas&t=SRoXfUkaUc9lTnoj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1' target='_blank'>Pokedex</a></li>
                </ul>
            </div>
            <p className='cd-web-text'>Como mencioné anteriormente, mi camino en el desarrollo web comenzó en Digital House, en la carrera de Certified Tech Developer. El desarrollo y el diseño web me resultan sumamente interesantes, 
                y al mismo tiempo, creo que todo lo aprendido puede ser aplicado en el ámbito de los videojuegos.</p>
        </div>
    )
}
const inf = () => {
    return (
        <div className='cd-web-content'>
            <p className='cd-web-text'>
                Mi proyecto se sustenta en una infraestructura robusta y dinámica, utilizando Docker para gestionar una serie de servicios esenciales tanto para el desarrollo como para el funcionamiento continuo del mismo. Mantengo una base de datos en MySQL destinada a la persistencia de los datos de los jugadores.
                 Además, cuento con una API programada en Java con Spring Boot, la cual planeo migrar a Python con Django3 para optimizar su rendimiento.</p>
            <p className='cd-web-text'>
            Asimismo, utilizo un servidor de GitLab para la gestión de mis grupos y proyectos, abarcando tanto el desarrollo web como los aspectos mencionados anteriormente. Todo lo que he implementado en 
            términos de infraestructura ha sido impulsado por mi curiosidad y el deseo constante de aprender y mejorar.
            </p>
        </div>
)
}
const prm = () => {
    return (
        <div className='cd-web-content'>
            <p className='cd-web-text'>
                Para diseñar, organizar y planificar mis proyectos, solía utilizar una combinación de herramientas como Excel, Word, Miro y Draw.io. 
                Sin embargo, recientemente he incorporado una herramienta llamada Boardmix, que combina todas estas funcionalidades en un solo lugar. 
            </p>
            <p className='cd-web-text'>
            Actualmente, utilizo Boardmix para diseñar tanto problemáticas funcionales como creativas. Adicionalmente, utilizo HacknPlan para 
            organizar mis tareas y asegurarme de que todo fluya de manera ordenada y eficiente.
            </p>
        </div>
)
}

const componentsTypes = {"web": web,"inf": inf, "prm" : prm};


const Card = (props) => {
    const Component = componentsTypes[props.type];
    console.log(Component);
    

    return( 
        <div className='cd-container'>
            <CardTitle title={props.title} image={props.image}/>
            <div className='cd-content'>
                <CardSubtitle/> 
                <CardContent>
                    <Component/>
                </CardContent>
            </div>
        </div>
    )
}

export default Card;