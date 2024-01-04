export const DarkKitchen = () => {
    return (
        <div className="darkKitchen">
            <h1>Dark Kitchen</h1>
            <span>I present to you one of the first team project I was a part of.
                We used JavaScript to add functionalities such as dark mode and local storage.
            </span>
            <span>In this project, we had to create a order site for a restaurant.</span>
            <h3>Some screenshots and video: </h3>

            <img src="darkKitchenPic1.png" alt="Dark Kitchen png" />
            <img src="darkKitchenPic2.png" alt="Dark Kitchen png" />

            <div className="videoDarkKitchen">
                <video width={"300vw"} controls>
                    <source src="public/DarkKitchenVid.webm" type="video/webm"/>
                </video>
                <span>In this short video, you can see how to add items inside of a basket and change to dark mode.</span>
            </div>
            <a href="https://mardixx.github.io/Dark-Kitchen/" target='blank'>Deployed project if you want to try for yourself.</a>
        </div>
    )
}