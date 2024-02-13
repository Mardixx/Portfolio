import { motion } from "framer-motion";

export const SuperCapsule = () => {
    return (
        <div className="superCapsule">
            <h1>Super Capsule</h1>
            <span>I present to you the first "full game" I made on Unity using C#.</span>
            <h3>Some screenshots: </h3>

            <motion.div whileHover={{ scale : 1.05 }}><img src="HomeScreenSuperCapsule.png" alt="Home Screen png" /></motion.div>
            <motion.div whileHover={{ scale : 1.05 }}><img src="Level1.png" alt="Level 1 png" /></motion.div>
            <motion.div whileHover={{ scale : 1.05 }}><img src="Level2.png" alt="Level 2 png" /></motion.div>

            <a href="https://github.com/Mardixx/superCapsule" target='blank'>Link to download the game from GitHub --Windows only--</a>
        </div>
    )
}