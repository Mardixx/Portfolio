import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../style/styles.css';
import { useEffect } from 'react';

export const Projects = () => {

    return (
        <div className="projectDisplay">
            <h1>Projects: </h1>
            <div className="project">
                <Link to='/CollectionProject' className="collectionProjectLink">
                    <motion.div 
                        initial={{ x : 200, opacity : 0 }} 
                        whileInView={{ x : 0, opacity : 1 }} 
                        transition={{ duration : 0.9, type : 'spring' }} 
                        className="collectionProject">

                        <img src="collectionProject.png" alt="Collection Project png" />
                    </motion.div>
                </Link>
            </div>
            <div className="project">
                <Link to='/MovieBrowser' className="movieBrowserLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="movieBrowser">
                        <img src="movieBrowser.png" alt="Movie Browser png" />
                    </motion.div>
                </Link>
            </div>
            <div className="project">
                <Link to='/DarkKitchen' className="darkKitchenLink">
                    <motion.div initial={{ x : 200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="darkKitchen">
                        <img src="darkKitchen.png" alt="Dark Kitchen png" />
                    </motion.div>
                </Link>
            </div>
            <div className="project">
                <Link to='/ProjectPlanner' className="projectPlannerLink">
                    <motion.div initial={{ x : -200, opacity : 0 }} whileInView={{ x : 0, opacity : 1 }} transition={{ duration : 0.9, type : 'spring' }} className="projectPlanner">
                        <img src="projectPlanner.png" alt="Project Planner png" />
                    </motion.div>
                </Link>
            </div>
        </div>
    )

}