import './style.css'
export const SectionDivider_00 = () => {

    return(
        <div className="divider_00"/>
    )
}

export const SectionDivider_01 = (props) => {

    return (
        <div className={`divider_01_container ${props.direction == "up" ? "dvi_01_up" : "dvi_01_down" }`}>
            <div className='dvi_01_gradient'/>
            <div className='dvi_01_image'/>
        </div>
    )
}
