export const MovieBrowser = () => {
    return (
        <div className="movieBrowser">
            <h1>Movie Browser</h1>
            <span>I present to you my first ever project in which I used React and Vite.</span>
            <span>In this project, we had to create a Movie Browser. We used a online database called 
                "The Movie Database" or "TMDB" to access movie informations.</span>
            <h3>Some screenshots and video: </h3>

            <img src="movieBrowserPic2.png" alt="Movie Browser png" />
            <img src="movieBrowserPic1.png" alt="Movie Browser png" />

            <div className="videoMovieBrowser">
                <video width={"300vw"} controls>
                    <source src="public/MovieBrowserVid.webm" type="video/webm"/>
                </video>
                <span>In this short video, you can see how you can navigate between multiple pages, visit movies and the similar movies to the one visited.</span>
            </div>
            <a href="https://movie-browser-taupe.vercel.app/" target='blank'>Deployed project if you want to try for yourself.</a>
        </div>
    )
}