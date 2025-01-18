import { motion } from "framer-motion";

export const AngularJavaAPIProject = () => {
    return (
        <div className="angularTuto">
            <h1>Angular Tutorial</h1>
            <span>I present to you two projects made with Angular. One was made following a tutorial "Wishlist" and the other was made from scratch.</span>
            <h3>Some screenshots: </h3>

            <motion.div whileHover={{ scale : 1.05 }}><img src="angularJavaCollection.png" alt="Angular and Java collection png" /></motion.div>
            <div className="videoDiv">
                <video width={"300vw"} controls>
                    <source src="javaAngularAPIProject.mkv" type="video/webm"/>
                </video>
                <span>In this short video, you can see how to add and delete cards from the front-end(Angular) to the back-end(Java).</span>
            </div>

            <div>
                <a href="https://github.com/Mardixx/AngularApp/" target='blank'>GitHub of the first</a>
                <span> and </span>
                <a href="https://github.com/Mardixx/CardSpring" target="_blank">second repository</a>
                <span> "not deployed" because they both need to run locally for them to work. (Instructions in the repositories)</span>
            </div>
        </div>
    )
}