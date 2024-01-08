import { motion } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";

export const Collection = () => {
    return (
        <div className="collection">
            <h1>Collection Project</h1>
            <span>I present to you one if not the first project using actual JavaScript.</span>
            <span>In this project, we had to create a 'Collection' of our choice in which we used objects 
                and diverse JavaScript things to add some functionalities to our website.</span>
            <h3>Some screenshots and video: </h3>

            <motion.div whileHover={{ scale : 1.1 }}><img src="collectionPic1.png" alt="Collecion png" /></motion.div>
            <motion.div whileHover={{ scale : 1.1 }}><img src="collectionPic2.png" alt="Collecion png" /></motion.div>

            <div className="videoDiv">
                <video width={"300vw"} controls>
                    <source src="collectionProjectVideo.webm" type="video/webm"/>
                </video>
                <span>In this short video, you can see how to delete a card from the collection (the can marked '3')
                    , access the MyAnimeList page and add a new card to the collection.</span>
            </div>
            <a href="https://mardixx.github.io/Collection-project/" target='blank'>Deployed project if you want to try for yourself.</a>
            <ScrollToTop />
            
        </div>
    )
}