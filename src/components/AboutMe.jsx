import { motion } from "framer-motion";

export const AboutMe = () => {
    return (
        <motion.div initial={{ opacity : 0 }} animate={{ opacity : 1 }} transition={{ duration : 2 }} className="aboutMe">
            <h1>Hi! My name is Kimi, I'm 19 years old.</h1>
            <motion.div whileHover={{ scale : 1.5 }} className="facePic"><img src="KimiFaceImage.jpg" alt="My face as a jpg" /></motion.div>
            <motion.div className="spanAboutMe" initial={{ scale : 0.2 }} animate={{ scale : 1.0 }} transition={{ duration : 0.5 }}><span>First of all, thank you for taking the time out of your busy day and taking a look at my portfolio. This means a lot.</span></motion.div>
            <motion.div className="spanAboutMe" initial={{ scale : 0.2 }} animate={{ scale : 1.0 }} transition={{ duration : 0.5 }}><span>In this Portfolio, you will be able to find 4 of my projects from the training I followed at BeCode Charleroi. 
                These projects are the ones I consider to have learned the most whilst creating them.</span></motion.div>
        </motion.div>
    )
}