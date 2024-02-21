import { motion } from "framer-motion";

export const AngularTutorial = () => {
    return (
        <div className="angularTuto">
            <h1>Angular Tutorial</h1>
            <span>I present to you two projects mae with angular. One was made following a tutorial "Wishlist" and the other was made from scratch.</span>
            <h3>Some screenshots: </h3>

            <motion.div whileHover={{ scale : 1.05 }}><img src="skill.PNG" alt="Skill png" /></motion.div>
            <motion.div whileHover={{ scale : 1.05 }}><img src="wishlist.PNG" alt="Wishlist png" /></motion.div>

            <a href="https://github.com/Mardixx/angularTutorial" target='blank'>GitHub of the two projects "Not deployed"</a>
        </div>
    )
}