import "./style.css"
const AboutThis = () => {

    return(
        <div className="abt-background">
            <div className="abt-content">
                <h2 className="abt-title">Bienvenidos a mi “web-folio”</h2>
                <p className="abt-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi  ullamcorper aliquet consequat. Class aptent taciti sociosqu 
                    ad litora  torquent per conubia nostra, per inceptos himenaeos. Sed dolor turpis,  efficitur vitae tortor a, faucibus luctus nulla.
                    Aenean id porttitor  orci, a cursus elit. Vivamus cursus sit amet leo at vestibulum. Maecenas  imperdiet, sem at faucibus accumsan, 
                    turpis arcu euismod ex, in  vestibulum justo augue non orci. In blandit placerat placerat. Curabitur  sed maximus massa. Cras quis massa 
                    eu nisl vehicula lobortis nec id  nibh. Phasellus sed magna cursus, bibendum massa quis, eleifend enim.  Nulla malesuada, mauris vitae 
                    lacinia semper, eros erat dignissim massa,  vitae tempor ex sem ac tortor. Class aptent taciti sociosqu ad litora  torquent per conubia 
                    nostra, per inceptos himenaeos.
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