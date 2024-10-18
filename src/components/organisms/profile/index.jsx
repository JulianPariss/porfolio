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
                    <h3>Titulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi  ullamcorper aliquet consequat. 
                        Class aptent taciti sociosqu ad litora  torquent per conubia nostra, per inceptos himenaeos. 
                        Sed dolor turpis,  efficitur vitae tortor a, faucibus luctus nulla. Aenean id porttitor  orci, a cursus elit.
                        Vivamus cursus sit amet leo at vestibulum. Maecenas  imperdiet, sem at faucibus accumsan, turpis arcu euismod ex, in  
                        vestibulum justo augue non orci. In blandit placerat placerat. Curabitur  sed maximus massa. Cras quis massa eu nisl 
                        vehicula lobortis nec id  nibh. Phasellus sed magna cursus, bibendum massa quis, eleifend enim.  Nulla malesuada, mauris
                        vitae lacinia semper, eros erat dignissim massa,  vitae tempor ex sem ac tortor. Class aptent taciti sociosqu ad litora 
                        torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
                <div className='txtblc textBlock_01'>
                    <h3>Subtitulo</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi  ullamcorper aliquet consequat. 
                        Class aptent taciti sociosqu ad litora  torquent per conubia nostra, per inceptos himenaeos. 
                        Sed dolor turpis,  efficitur vitae tortor a, faucibus luctus nulla. Aenean id porttitor  orci, a cursus elit.
                        Vivamus cursus sit amet leo at vestibulum. Maecenas  imperdiet, sem at faucibus accumsan, turpis arcu euismod ex, in 
                        vestibulum justo augue non orci. In blandit placerat placerat.
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