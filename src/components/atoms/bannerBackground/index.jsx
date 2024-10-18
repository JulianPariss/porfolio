import './style.css'






const BannerBackground = () => {

    return(
        <>
             <svg viewBox='0 0 300 80' width={"100%"} style={{position: "absolute", top: "0", left: "0", zIndex: "99"}}>
                <defs>
                    <clipPath id='mask' viewBox='0 0 300 50'>
                        <path d="M-6.330398,33.881297l-.204838-43.972377h315.655448v68.174809h-127.889949L164.846949,33.881297h-171.177347Z" transform="matrix(1 0 0 0.832932 0-.164195)" fill="white"/>
                    </clipPath>


                    <linearGradient id="gradient1" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="5%" stop-color="#001c11" />
                        <stop offset="100%" stop-color="#0a5c3b" stopOpacity={0}/>
					</linearGradient>
                </defs>
                <path d="M-6.330398,33.881297l-.204838-43.972377h315.655448v68.174809h-127.889949L164.846949,33.881297h-171.177347Z" transform="matrix(1 0 0 0.832932 0-.164195)" fill={"url(#gradient1)"} stroke="#f0ffc6" strokeWidth={0.3}/>
                {/* <image  className="backgroundImage" clip-path="url(#mask)" href='https://i.pinimg.com/originals/9c/14/86/9c14863b9e64ffc65cdfda4cdc9a0b99.gif'/> */}  

                <foreignObject width="300" height="50" clip-path="url(#mask)">
                    <div className="backgroundImage" style={{width: "100%", height: "100%"}}/>
                </foreignObject>
                
            </svg>
            <div className='backgroundImage'></div>
        </>
    )
}

export default BannerBackground;