import './style.css'
import Icon from "../../atoms/icon"
const LinkTree = () => {
    const mailToCopy = "";

    const handleCopyClick = () => {
        navigator.clipboard.writeText(mailToCopy).then(() => {
          console.log('Text copied to clipboard');
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }

    return(
        <div className="lkt-container">
            <Icon icon={'github-icon.svg'} linkTo={"https://github.com/JulianPariss"}/>
            <Icon icon={'mail-icon.svg'} linkTo={"mailto:julian.pariss@hotmail.com?subject=Subject&body=Hola%20Julian!"}/>
            <Icon icon={'itchio-icon.svg'} linkTo={"https://zero-g4mes.itch.io/an-mmo-im-working-on-and-i-still-dont-have-its-name"}/>
            <Icon icon={'whatsapp-icon.svg'} linkTo={"https://wa.me/542216357835?text=Hola%20Julian!"}/>
            <Icon icon={'linkedin-icon.svg'} linkTo={"https://www.linkedin.com/in/j-paris/"}/>
        </div>
    )
}


export default LinkTree;