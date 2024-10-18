import "./style.css"


const VideoPlayer = () => {
    
    return(
        <div className="videoBox">
            <video className="videoComponent" autoPlay muted loop>
                <source src="intro.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}


export default VideoPlayer;